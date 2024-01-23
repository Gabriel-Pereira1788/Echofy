import {useAuthContext} from '@providers';
import {MutationConfig} from 'src/domain/types';

import {authService} from '../auth-service';
import {AuthCredentials, AuthSignUpDTO} from '../auth-types';
import {useAuthMutation} from '../hooks';

export function useAuthSignUp(config: MutationConfig<AuthCredentials>) {
  const {refreshCredentials} = useAuthContext();

  const {isLoading, mutate} = useAuthMutation({
    serviceFn: authService.signUp,
    onSuccess: ac => {
      refreshCredentials(ac);

      console.log('success', ac);
      if (config.onSuccess) {
        config.onSuccess(ac);
      }
    },
    onError: err => {
      if (config.onError) {
        config.onError(err);
      }
      console.log('signUpError', err);
    },
  });

  return {
    isLoading,
    signUp: (variables: AuthSignUpDTO) => mutate(variables),
  };
}
