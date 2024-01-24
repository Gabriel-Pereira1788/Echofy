import {useAuthContext} from '@providers';

import {CommonError, MutationConfig} from '../../types';
import {authService} from '../auth-service';
import {AuthCredentials, AuthSignInDTO} from '../auth-types';
import {useAuthMutation} from '../hooks';

export function useAuthSignIn(
  config: MutationConfig<AuthCredentials, CommonError>,
) {
  const {refreshCredentials} = useAuthContext();

  const {isLoading, isSuccess, mutate} = useAuthMutation({
    serviceFn: authService.signIn,
    onSuccess: ac => {
      refreshCredentials(ac);
      if (config.onSuccess) {
        config.onSuccess(ac);
      }
    },
    onError: err => {
      console.log('error', err);
      if (config.onError) {
        const ERROR_MESSAGE =
          err.response?.status === 404
            ? 'Invalid email or password.'
            : 'Something is wrong,try again later.';
        config.onError({
          message: ERROR_MESSAGE,
          status: err && err.response ? err.response?.status : 500,
        });
      }
    },
  });

  return {
    isSuccess,
    isLoading,
    signIn: (variables: AuthSignInDTO) => mutate(variables),
  };
}
