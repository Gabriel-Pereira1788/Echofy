import {CommonError, MutationConfig} from 'src/domain/types';

import {authService} from '../auth-service';
import {AuthCredentials, FinishRegisterVariables} from '../auth-types';
import {useAuthMutation} from '../hooks';

export function useAuthFinishRegister(
  config: MutationConfig<AuthCredentials, CommonError>,
) {
  const {mutate, isLoading, isSuccess} = useAuthMutation({
    serviceFn: authService.finishRegister,
    onSuccess: ac => {
      if (config.onSuccess) {
        config.onSuccess(ac);
      }
    },
    onError: err => {
      console.log('error on finish register', err);
      if (config.onError) {
        const ERROR_MESSAGE = 'Something is wrong.';
        config.onError({
          message: ERROR_MESSAGE,
          status: err && err.response ? err.response?.status : 500,
        });
      }
    },
  });

  return {
    isLoading,
    isSuccess,
    finishRegister: (variables: FinishRegisterVariables) => mutate(variables),
  };
}
