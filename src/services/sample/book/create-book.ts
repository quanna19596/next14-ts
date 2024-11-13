import SampleService from '@/services/sample';
import { TBook, TResponseSuccess } from '@/services/sample/types';
import { TParameters } from '@/services/types';

export type TCreateBookPaths = {};

export type TCreateBookQueries = {};

export type TCreateBookBody = TBook;

export type TCreateBookParameters = TParameters<TCreateBookPaths, TCreateBookQueries, TCreateBookBody>;

export type TCreateBookResponse = TResponseSuccess;

const createBook = async (params: TCreateBookParameters): Promise<TCreateBookResponse> => {
  const response = await SampleService.post(`/books`, params.body, { params: params.queries });
  return response.data;
};

export default createBook;
