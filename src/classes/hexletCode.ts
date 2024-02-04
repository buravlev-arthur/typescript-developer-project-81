import { omit } from 'lodash';
import type { Template, Params, Attrs } from 'src/types';
import Tag from './tag';

class HexletCode {
  private static readonly defaultAttrs = {
    form: {
      action: '#',
      method: 'post',
    },
    textarea: {
      cols: 20,
      rows: 40,
    },
    input: {
      type: 'text',
    },
  };

  constructor(
    private template: Template,
    private formItems: string[] = [],
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

    const formTagContainer = new Tag('form', formAttrs, form.formItems.join(''));
    return formTagContainer.toString();
  }

  public input(
    inputName: string,
    attrs?: Attrs & { as?: keyof Omit<typeof HexletCode.defaultAttrs, 'form'> },
  ) {
    if (!(inputName in this.template)) {
      throw Error(`Error: Field '${inputName}' does not exist in the template.`);
    }

    const tagName = attrs?.as ?? 'input';

    const tagAttrs = {
      name: inputName,
      ...HexletCode.defaultAttrs[tagName],
      value: this.template[inputName],
      ...omit(attrs, 'as'),
    };

    const formItem = tagName === 'input'
      ? new Tag(tagName, tagAttrs)
      : new Tag(tagName, omit(tagAttrs, 'value'), this.template[inputName]);

    this.formItems.push(formItem.toString());
  }
}

export default HexletCode;
