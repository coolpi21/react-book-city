import AxiosInstance from '@/hooks/useRequest/axiosInstance';
import { AxiosError, AxiosRequestConfig } from 'axios';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

interface Response<Data> {
  code: number;
  data: Data;
  msg: string;
}

interface useRequestResponse<Data, Error>
  extends Pick<SWRResponse<Response<Data>, AxiosError<Error>>, 'mutate' | 'error' | 'isValidating'> {
  data: Data | undefined;
  response: Response<Data> | undefined;
}

function useRequest<Data = unknown, Error = unknown>(
  request: AxiosRequestConfig,
  config?: SWRConfiguration
): useRequestResponse<Data, Error> {
  const {
    data: response,
    error,
    mutate,
    isValidating,
  } = useSWR<Response<Data>, AxiosError<Error>>(request.url, () => AxiosInstance.request(request), config);

  return {
    data: response?.data,
    response,
    error,
    mutate,
    isValidating,
  };
}

export default useRequest;
