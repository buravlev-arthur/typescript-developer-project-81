import type { Template, Params } from 'src/types';
import Tag from './tag';

class HexletCode {
  static formFor(template: Template, config: Params, callback: (f: unknown) => unknown) {
    callback(null);

    const formAttrs = {
      action: config?.url ?? '#',
      method: 'post',
    };

    const form = new Tag('form', formAttrs);

    return form.toString();
  }
}

export default HexletCode;
