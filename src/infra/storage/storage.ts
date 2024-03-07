import {mmkv} from './mmkv/mmkv';

function setItem<T>(key?: string, value?: T) {
  mmkv.set(key!, JSON.stringify(value!));
}

async function getItem<T>(key?: string) {
  const data = mmkv.getString(key!) as string;

  const result = data ? ((await JSON.parse(data)) as T) : data;
  return result as T;
}

function removeItem(key?: string) {
  mmkv.delete(key!);
}

export const storage = {
  setItem,
  getItem,
  removeItem,
};
