import React, {createContext, useContext, useEffect, useState} from 'react';

import {AuthCredentials} from '@domain';
import {StorageKeys, storage} from '@infra';

type Props = {
  uid?: string;
  credentials: AuthCredentials | null;
  refreshCredentials: (ac: AuthCredentials) => void;
};

const AuthContext = createContext({} as Props);

export function AuthProvider({children}: React.PropsWithChildren) {
  const [credentials, setCredentials] = useState<AuthCredentials | null>(null);
  const uid = credentials ? credentials.id : undefined;

  function refreshCredentials(ac: AuthCredentials) {
    setCredentials(ac);

    storage.set(StorageKeys.Credentials, JSON.stringify(ac));
  }

  function getLastCredentials(): AuthCredentials {
    const credentials = storage.get(StorageKeys.Credentials);

    return credentials ? JSON.parse(credentials) : null;
  }

  useEffect(() => {
    const lastCredentials = getLastCredentials();
    setCredentials(lastCredentials);
  }, []);

  return (
    <AuthContext.Provider value={{credentials, uid, refreshCredentials}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
