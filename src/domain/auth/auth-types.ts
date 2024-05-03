import {BookCategory, CategoryIdentify} from '../Book';

export interface AuthSignInDTO {
  email: string;
  password: string;
}

export interface AuthSignUpDTO {
  email: string;
  password: string;
  birthDate: string;
  name: string;
}

export interface AuthCredentialsAPI {
  id: string;
  isValid?: boolean;
  birthDate: string;
  email: string;
  name: string;
  token: string;
  firstLogin?: boolean;
  userCategories?: CategoryIdentify[];
}

export interface AuthCredentials {
  email: string;
  birthDate: string;
  name: string;
  id: string;
  firstLogin?: boolean;
  userCategories?: CategoryIdentify[];
}

export interface FinishRegisterVariables {
  uid: string;
  userSelectedCategories: BookCategory[];
}
