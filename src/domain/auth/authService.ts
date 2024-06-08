import {multimediaService} from '@services';

import {authAdapter} from './authAdapter';
import {authGateway} from './authGateway';
import {
  AuthCredentials,
  AuthSignInDTO,
  AuthSignUpDTO,
  FinishRegisterVariables,
  UpdateProfileImageVariables,
} from './authTypes';

async function signIn(data: AuthSignInDTO) {
  const result = await authGateway.signIn(data);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}

async function signUp(data: AuthSignUpDTO) {
  const result = await authGateway.signUp(data);

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
  const result = await authGateway.update(uid, body);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}
export const authService = {
  signIn,
  signUp,
  finishRegister,
  updateProfileImage,
};
