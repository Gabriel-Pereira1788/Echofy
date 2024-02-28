import React, {createContext, useContext, useEffect, useState} from 'react';

import {AuthCredentials} from '@domain';
import {StorageKeys, storage} from '@infra';

type Props = {
  uid?: string;
  credentials: AuthCredentials | null;
  refreshCredentials: (ac: AuthCredentials) => void;
  removeCredentials: () => void;
};

const AuthContext = createContext({} as Props);

export function AuthProvider({children}: React.PropsWithChildren) {
  const [credentials, setCredentials] = useState<AuthCredentials | null>(null);
  const uid = credentials ? credentials.id : undefined;

  function refreshCredentials(ac: AuthCredentials) {
    setCredentials(ac);

    storage.setItem(StorageKeys.Credentials, JSON.stringify(ac));
  }

  function removeCredentials() {
    setCredentials(null);
    storage.removeItem(StorageKeys.Credentials);
  }

  async function getLastCredentials(): Promise<AuthCredentials | null> {
    const ac = await storage.getItem<AuthCredentials>(StorageKeys.Credentials);

    return ac ? ac : null;
  }

  async function handleGetLastCredentials() {
    const lastCredentials = await getLastCredentials();
    setCredentials(lastCredentials);
  }

  useEffect(() => {
    handleGetLastCredentials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{credentials, uid, refreshCredentials, removeCredentials}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
