import SampleService from '@/services/sample';
import { TResponseSuccess } from '@/services/sample/types';
import { TParameters } from '@/services/types';

export type TDeleteBookPaths = {
  id: string;
};

export type TDeleteBookQueries = {};

export type TDeleteBookParameters = TParameters<TDeleteBookPaths, TDeleteBookQueries>;

export type TDeleteBookResponse = TResponseSuccess;

const deleteBook = async (params: TDeleteBookParameters): Promise<TDeleteBookResponse> => {
  const response = await SampleService.delete(`/books/${params.paths?.id}`, { params: params.queries });
  return response.data;
};

export default deleteBook;
