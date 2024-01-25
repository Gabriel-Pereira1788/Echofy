export interface AuthSignInDTO {
  email: string;
  password: string;
}

export interface AuthSignUpDTO {
  email: string;
  password: string;
  birthDate: string;
}

export interface AuthCredentialsAPI {
  id: string;
  isValid?: boolean;
  birthDate: string;
  email: string;
  token: string;
  firstLogin?: boolean;
}

export interface AuthCredentials {
  email: string;
  birthDate: string;
  id: string;
  firstLogin?: boolean;
}
