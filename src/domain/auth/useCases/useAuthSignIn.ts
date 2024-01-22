import {useAuthContext} from '@providers';

import {MutationConfig} from '../../types';
import {authService} from '../auth-service';
import {AuthCredentials, AuthSignInDTO} from '../auth-types';
import {useAuthMutation} from '../hooks';

export function useAuthSignIn(config: MutationConfig<AuthCredentials>) {
  const {refreshCredentials} = useAuthContext();

  const {isLoading, mutate} = useAuthMutation({
    serviceFn: authService.signIn,
    onSuccess: ac => {
      refreshCredentials(ac);
      if (config.onSuccess) {
        config.onSuccess(ac);
      }
    },
    onError: err => {
      console.log('error', err.response?.status);
      if (config.onError) {
        config.onError(err);
      }
    },
  });

  return {
    isLoading,
    signIn: (variables: AuthSignInDTO) => mutate(variables),
  };
}
