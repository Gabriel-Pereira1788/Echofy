/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useState} from 'react';

import {StorageKeys, storage} from '@infra';
import {UseFormGetValues, UseFormSetValue} from 'react-hook-form';

import {SignInSchema} from '../signInSchema';

type Props = {
  getValues: UseFormGetValues<SignInSchema>;
  setValue: UseFormSetValue<SignInSchema>;
};
export function useRemindAccessData({getValues, setValue}: Props) {
  const [isRemembered, setIsRemembered] = useState(false);

  const onChangeIsRemembered = useCallback(() => {
    setIsRemembered(prev => !prev);

    const accessData = getAccessData();
    const values = getValues();

    if (!!accessData && values.email && values.password) {
      storage.removeItem(StorageKeys.AccessData);
    } else {
      storage.setItem(StorageKeys.AccessData, JSON.stringify(values));
    }
  }, []);

  async function getAccessData(): Promise<SignInSchema | null> {
    const data = await storage.getItem<SignInSchema>(StorageKeys.AccessData);

    return data ? data : null;
  }

  async function handleGetAccessData() {
    const accessData = await getAccessData();
    if (accessData) {
      setIsRemembered(true);
      setValue('email', accessData.email);
      setValue('password', accessData.password);
    }
  }

  useEffect(() => {
    handleGetAccessData();
  }, []);

  return {
    isRemembered,
    onChangeIsRemembered,
  };
}
