import type { Attrs } from 'src/types';

class Tag {
  private static readonly templates = {
    form: '<form{attrs}>{text}</form>',
    label: '<label{attrs}>{text}</label>',
    input: '<input{attrs}>',
    textarea: '<textarea{attrs}>{text}</textarea>',
  };

  constructor(
    private name: keyof typeof Tag.templates,
    private attrs: Attrs = {},
    private text: string = '',
  ) {}

  private attrsToString(): string {
    const attrsAsString = Object.entries(this.attrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    return attrsAsString.length ? ` ${attrsAsString}` : '';
  }

  toString(): string {
    const template = Tag.templates[this.name];
    const attrs = this.attrsToString();
    return template
      .replace('{attrs}', attrs)
      .replace('{text}', this.text);
  }
}

export default Tag;
