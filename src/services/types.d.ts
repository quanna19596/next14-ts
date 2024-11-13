import { AxiosRequestConfig } from 'axios';

export type TCustomAxiosRequestConfig = Omit<AxiosRequestConfig, 'headers'> & {
  headers: any;
};

export type TParameters<TPaths = {}, TQueries = {}, TBody = {}> = {
  paths?: TPaths;
  queries?: TQueries;
  body?: TBody;
};

export type TResponse<TSuccessResponse, TErrorResponse> = TSuccessResponse & TErrorResponse;
