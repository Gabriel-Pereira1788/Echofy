import {useAuthContext} from '@providers';
import {authService} from '../auth-service';
import {AuthCredentials, AuthSignUpDTO} from '../auth-types';
import {useAuthMutation} from '../hooks';
import {MutationConfig} from 'src/domain/types';

export function useAuthSignUp(config: MutationConfig<AuthCredentials>) {
  const {refreshCredentials} = useAuthContext();

  const {isLoading, mutate} = useAuthMutation({
    serviceFn: authService.signUp,
    onSuccess: ac => {
      refreshCredentials(ac);

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
