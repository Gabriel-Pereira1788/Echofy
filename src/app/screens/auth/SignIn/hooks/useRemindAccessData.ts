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
      storage.remove(StorageKeys.AccessData);
    } else {
      storage.set(StorageKeys.AccessData, JSON.stringify(values));
    }
  }, []);

  function getAccessData(): SignInSchema {
    const data = storage.get(StorageKeys.AccessData);

    return data ? JSON.parse(data) : null;
  }

  useEffect(() => {
    const accessData = getAccessData();
    if (accessData) {
      setIsRemembered(true);
      setValue('email', accessData.email);
      setValue('password', accessData.password);
    }
  }, []);

  return {
    isRemembered,
    onChangeIsRemembered,
  };
}
