export type TResponseError = {
  errorCode: number;
  errorMessage: string;
};

export type TResponseSuccess<T = {}> = {
  message: string;
  data?: T;
  code?: number;
};

export type TBook = {
  name: string;
  author: string;
};
