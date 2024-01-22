import {AuthCredentialsAPI, AuthSignInDTO} from 'src/domain/auth/auth-types';

export const authCredentialsMock: AuthCredentialsAPI = {
  id: '3e919f78-11e6-4a46-93ad-be96e57118e3',
  email: 'johnDoe@gmail.com',
  birthDate: '21/12/2000',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlOTE5Zjc4LTExZTYtNGE0Ni05M2FkLWJlOTZlNTcxMThlMyIsImVtYWlsIjoiam9obkRvZUBnbWFpbC5jb20iLCJiaXJ0aERhdGUiOiIyMS8xMi8yMDAwIiwiaWF0IjoxNzA1ODg2MTIzfQ.qgALRjsKE84GBCS882LIFtz96F2ADseeUrvx4u_pSYM',
};

export const authSignInValidation: AuthSignInDTO = {
  email: 'johnDoe@gmail.com',
  password: 'johnDoe555',
};
