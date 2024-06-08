import {useAuthContext} from '@providers';

import {CommonError, MutationConfig} from '../../types';
import {authService} from '../authService';
import {AuthCredentials, AuthSignUpDTO} from '../authTypes';
import {useAuthMutation} from '../hooks';

export function useAuthSignUp(
  config: MutationConfig<AuthCredentials, CommonError>,
) {
  const {refreshCredentials} = useAuthContext();

  const {isLoading, isSuccess, mutate} = useAuthMutation({
    serviceFn: authService.signUp,
    onSuccess: ac => {
      refreshCredentials(ac);

      if (config.onSuccess) {
        config.onSuccess(ac);
      }
    },
    onError: err => {
      console.log('signUpError', err);
      if (config.onError) {
        const ERROR_MESSAGE = 'Something is wrong, try again later.';
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
    signUp: (variables: AuthSignUpDTO) => mutate(variables),
  };
}
