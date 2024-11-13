import SampleService from '@/services/sample';
import { TBook, TResponseSuccess } from '@/services/sample/types';
import { TParameters } from '@/services/types';

export type TUpdateBookPaths = {
  id: string;
};

export type TUpdateBookQueries = {};

export type TUpdateBookBody = TBook;

export type TUpdateBookParameters = TParameters<TUpdateBookPaths, TUpdateBookQueries, TUpdateBookBody>;

export type TUpdateBookResponse = TResponseSuccess;

const updateBook = async (params: TUpdateBookParameters): Promise<TUpdateBookResponse> => {
  const response = await SampleService.put(`/books/${params.paths?.id}`, params.body, { params: params.queries });
  return response.data;
};

export default updateBook;
