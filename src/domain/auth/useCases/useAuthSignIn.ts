import {useMutation} from '@tanstack/react-query';
import {authService} from '../auth-service';
import {AuthCredentials, AuthSignInDTO} from '../auth-types';
import {MutationConfig} from '../../types';
import {useAuthMutation} from '../hooks';

export function useAuthSignIn(config: MutationConfig<AuthCredentials>) {
  const {isLoading, mutate} = useAuthMutation({
    serviceFn: authService.signIn,
    onSuccess: ac => {
      console.log('credentials', ac);
    },
    onError: err => {
      console.log('error', err);
    },
  });

  return {
    isLoading,
    signIn: (variables: AuthSignInDTO) => mutate(variables),
  };
}
