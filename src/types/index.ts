export type Template = { [key: string]: string };

export type Params = {
  method?: 'get' | 'post',
  url?: string;
};

export type Attrs = { [key: string]: string | number };
