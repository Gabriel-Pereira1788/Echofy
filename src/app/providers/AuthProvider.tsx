import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {database} from '@database';
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
  const uid = credentials && credentials.id ? credentials.id : undefined;

  function refreshCredentials(ac: AuthCredentials) {
    setCredentials(ac);

    database.open(ac.id);
    storage.setItem(StorageKeys.Credentials, ac);
  }

  function removeCredentials() {
    setCredentials(null);
    storage.removeItem(StorageKeys.Credentials);
  }

  async function getLastCredentials(): Promise<AuthCredentials | null> {
    const ac = await storage.getItem<AuthCredentials>(StorageKeys.Credentials);

    return ac ? ac : null;
  }

  const handleGetLastCredentials = useCallback(async () => {
    const lastCredentials = await getLastCredentials();
    setCredentials(lastCredentials);
  }, []);

  useEffect(() => {
    handleGetLastCredentials();
  }, [handleGetLastCredentials]);

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
