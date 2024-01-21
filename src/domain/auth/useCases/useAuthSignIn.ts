import {authService} from '../auth-service';
import {AuthCredentials, AuthSignInDTO} from '../auth-types';
import {MutationConfig} from '../../types';
import {useAuthMutation} from '../hooks';
import {useAuthContext} from '@providers';

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
      console.log('error', err);
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
