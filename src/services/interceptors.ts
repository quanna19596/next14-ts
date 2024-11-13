import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { TCustomAxiosRequestConfig } from './types.d';

const InterceptorInstance = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL
  });

  const onRequest = async (request: TCustomAxiosRequestConfig): Promise<TCustomAxiosRequestConfig> => {
    const requestHeaders = request.headers || {};
    const commonHeaders = { ...requestHeaders };

    return { ...request, headers: commonHeaders };
  };

  const onResponseSuccess = (response: AxiosResponse): AxiosResponse => response;

  const onResponseError = async (axiosError: AxiosError): Promise<void | AxiosResponse<any>> => Promise.reject(axiosError);

  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponseSuccess, onResponseError);

  return instance;
};

export default InterceptorInstance;
