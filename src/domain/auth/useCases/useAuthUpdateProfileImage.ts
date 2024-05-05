import {AuthCredentials, CommonError, MutationConfig} from '@domain';
import {ImageAsset} from '@infra';
import {useAuthContext} from '@providers';

import {authService} from '../auth-service';
import {useAuthMutation} from '../hooks';

export function useAuthUpdateProfileImage(
  config: MutationConfig<AuthCredentials, CommonError>,
) {
  const {refreshCredentials, uid} = useAuthContext();

  const {mutate, isLoading, isSuccess} = useAuthMutation({
    serviceFn: authService.updateProfileImage,
    onSuccess: ac => {
      refreshCredentials(ac);
      if (config.onSuccess) {
        config.onSuccess(ac);
      }
    },
    onError: err => {
      if (config.onError) {
        config.onError({
          message: err && err.message ? err.message : 'Something is wrong',
          status: err && err.response ? err.response?.status : 500,
        });
      }
    },
  });

  return {
    isLoading,
    isSuccess,
    updateProfileImage: (image: ImageAsset) => mutate({uid, image}),
  };
}
