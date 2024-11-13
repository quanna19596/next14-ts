import SampleService from '@/services/sample';
import { TBook, TResponseSuccess } from '@/services/sample/types';
import { TParameters } from '@/services/types';

export type TGetOneBookPaths = {
  id: string;
};

export type TGetOneBookQueries = {};

export type TGetOneBookParameters = TParameters<TGetOneBookPaths, TGetOneBookQueries>;

export type TGetOneBookResponse = TResponseSuccess<TBook>;

const getOneBook = async (params: TGetOneBookParameters): Promise<TGetOneBookResponse> => {
  const response = await SampleService.get(`/books/${params.paths?.id}`, { params: params.queries });
  return response.data;
};

export default getOneBook;
