import SampleService from '@/services/sample';
import { TBook, TResponseError, TResponseSuccess } from '@/services/sample/types';
import { TParameters, TResponse } from '@/services/types';

export type TGetBooksPaths = {};

export type TGetBooksQueries = {};

export type TGetBooksParameters = TParameters<TGetBooksPaths, TGetBooksQueries>;

export type TGetBooksResponse = TResponse<TResponseSuccess<TBook[]>, TResponseError>;

const getBooks = async (params: TGetBooksParameters): Promise<TGetBooksResponse> => {
  try {
    const response = await SampleService.get(`/books`, { params: params.queries });
    return response.data;
  } catch (error) {
    return error as TGetBooksResponse;
  }
};

export default getBooks;
