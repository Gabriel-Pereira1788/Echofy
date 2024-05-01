import {StorageKeys} from '../../types';

export interface StorageImpl {
  setItem<T>(key?: StorageKeys, value?: T): void;
  getItem<T>(key?: StorageKeys): Promise<T>;
  removeItem(key?: StorageKeys): void;
}
