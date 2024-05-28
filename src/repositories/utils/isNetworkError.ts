import {AxiosError} from 'axios';

export function isNetworkError(error: unknown) {
  const Error = error as AxiosError;
  return Error && Error.code;
}
