import {multimediaService} from '@services';

import {authAdapter} from './auth-adapter';
import {authApi} from './auth-api';
import {
  AuthCredentials,
  AuthSignInDTO,
  AuthSignUpDTO,
  FinishRegisterVariables,
  UpdateProfileImageVariables,
} from './auth-types';

async function signIn(data: AuthSignInDTO) {
  const result = await authApi.signIn(data);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}

async function signUp(data: AuthSignUpDTO) {
  const result = await authApi.signUp(data);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}

async function finishRegister({
  uid,
  userSelectedCategories,
}: FinishRegisterVariables) {
  const userCategories = authAdapter.toCategoriesApi(userSelectedCategories);
  const body: Partial<AuthCredentials> = {
    firstLogin: false,
    userCategories,
  };

  const ac = await updateCredentials(uid, body);
  return ac;
}

async function updateProfileImage({uid, image}: UpdateProfileImageVariables) {
  const imageUri = await multimediaService.generateImageUri(image);
  if (!imageUri) {
    throw new Error('Error on generate image uri');
  }
  const body: Partial<AuthCredentials> = {
    profileImage: imageUri,
  };

  const ac = await updateCredentials(uid, body);

  return ac;
}

async function updateCredentials(uid: string, body: Partial<AuthCredentials>) {
  const result = await authApi.update(uid, body);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}
export const authService = {
  signIn,
  signUp,
  finishRegister,
  updateProfileImage,
};
