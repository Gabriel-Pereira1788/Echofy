import {useMutation} from '@tanstack/react-query';
import {MutationConfig} from '../../types';

interface AuthMutationsProps<Variables, Response> {
  serviceFn: (variables: Variables) => Promise<Response>;
}

export function useAuthMutation<Variables, Response>(
  props: AuthMutationsProps<Variables, Response> & MutationConfig<Response>,
) {
  const {isPending, mutate} = useMutation<Response, Error, Variables>({
    mutationFn: variables => props.serviceFn(variables),
    onSuccess: data => {
      if (props.onSuccess) {
        props.onSuccess(data);
      }
    },
    onError: error => {
      if (props.onError) {
        props.onError(error);
      }
    },
  });

  return {
    isLoading: isPending,
    mutate,
  };
}
