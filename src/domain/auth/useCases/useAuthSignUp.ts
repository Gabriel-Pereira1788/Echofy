import {authService} from '../auth-service';
import {AuthSignUpDTO} from '../auth-types';
import {useAuthMutation} from '../hooks';

export function useAuthSignUp() {
  const {isLoading, mutate} = useAuthMutation({
    serviceFn: authService.signUp,
    onSuccess: data => {
      console.log('signUpCredentials', data);
    },
    onError: err => {
      console.log('signUpError', err);
    },
  });

  return {
    isLoading,
    signUp: (variables: AuthSignUpDTO) => mutate(variables),
  };
}
