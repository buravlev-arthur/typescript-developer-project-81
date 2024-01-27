class Tag {
  private static readonly templates = {
    input: '<input{attrs}>',
    br: '<br>',
    hr: '<hr>',
    wbr: '<wbr>',
    img: '<img{attrs}>',
    area: '<area{attrs}',
    keygen: '<keygen{attrs}>',
    label: '<label{attrs}>{text}</label>',
    div: '<div{attrs}>{text}</div>',
  };

  constructor(
    private name: keyof typeof Tag.templates,
    private attrs: { [key: string]: string } = {},
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
