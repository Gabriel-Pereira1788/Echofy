import {AuthSignInDTO, AuthSignUpDTO} from '@domain';

export const signInDTO: AuthSignInDTO = {
  email: 'johnDoe@gmail.com',
  password: 'johnDoe555',
};
export const signInWrongDTO: AuthSignInDTO = {
  email: 'johnDoe111@gmail.com',
  password: 'johnDoe555',
};

export const signUpDTO: AuthSignUpDTO = {
  email: 'johnDoe@gmail.com',
  birthDate: '21/12/2001',
  password: 'johnDoe555',
};

export const signUpWrongDTO: AuthSignUpDTO = {
  email: '',
  birthDate: '21/12/2001',
  password: 'johnDoe555',
};
