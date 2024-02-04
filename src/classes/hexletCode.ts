import { omit, capitalize } from 'lodash';
import type { Template, Params, Attrs } from 'src/types';
import Tag from './tag';

class HexletCode {
  private static readonly defaultAttrs = {
    form: {
      method: 'post',
      action: '#',
    },
    textarea: {
      cols: 20,
      rows: 40,
    },
  };

  constructor(
    private template: Template,
    private formItems: Tag[] = [],
  ) {}

  static formFor(
    template: Template,
    params: Params,
    generateFormItems: (f: HexletCode) => void,
  ): string | Error {
    const form = new HexletCode(template);

    const formAttrs = {
      ...HexletCode.defaultAttrs.form,
      action: params?.url ?? HexletCode.defaultAttrs.form.action,
    };

    generateFormItems(form);

    const fromItemsAsString = form.formItems
      .map((item) => item.toString())
      .join('');

    const formTagContainer = new Tag('form', formAttrs, fromItemsAsString);
    return formTagContainer.toString();
  }

  public input(
    inputName: string,
    attrs?: Attrs & { as?: 'textarea' },
  ): void {
    if (!(inputName in this.template)) {
      throw Error(`Error: Field '${inputName}' does not exist in the template.`);
    }

    const label = new Tag('label', { for: inputName }, capitalize(inputName));
    this.formItems.push(label);

    const tagName = attrs?.as ?? 'input';

    if (tagName === 'input') {
      const inputAttrs = {
        name: inputName,
        type: 'text',
        value: this.template[inputName],
        ...omit(attrs, 'as'),
      };
      this.formItems.push(new Tag('input', inputAttrs));
    }

    if (tagName === 'textarea') {
      const textareaAttrs = {
        ...HexletCode.defaultAttrs[tagName],
        name: inputName,
        ...omit(attrs, 'as'),
      };
      this.formItems.push(new Tag(tagName, textareaAttrs, this.template[inputName]));
    }
  }

  public submit(text: string = 'Save') {
    this.formItems.push(new Tag('input', { type: 'submit', value: text }));
  }
}

export default HexletCode;
