import {MMKV} from 'react-native-mmkv';

import {StorageKeys} from '../../../types';
import {StorageImpl} from '../types';

const mmkv = new MMKV();
function setItem<T>(key?: StorageKeys, value?: T) {
  mmkv.set(key!, JSON.stringify(value!));
}

async function getItem<T>(key?: StorageKeys) {
  const data = mmkv.getString(key!) as string;

  const result = data ? ((await JSON.parse(data)) as T) : data;
  return result as T;
}

function removeItem(key?: StorageKeys) {
  mmkv.delete(key!);
}

export const mmkvImpl = (): StorageImpl => ({
  setItem,
  getItem,
  removeItem,
});
