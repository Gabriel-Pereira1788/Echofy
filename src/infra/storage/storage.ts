import {mmkv} from './mmkv/mmkv';
import {StorageKeys} from './types';

function set(key: StorageKeys, value: string) {
  mmkv.set(key, value);
}

function get(key: StorageKeys) {
  return mmkv.getString(key);
}

function remove(key: StorageKeys) {
  mmkv.delete(key);
}

export const storage = {
  set,
  get,
  remove,
};
