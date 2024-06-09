import {StorageKeys, storage} from '@infra';

export function clearStorage() {
  storage.removeItem(StorageKeys.BookMarkPersistence);
  storage.removeItem(StorageKeys.MinimizePlayer);
  storage.removeItem(StorageKeys.SearchHistory);
  storage.removeItem(StorageKeys.SyncBooks);
  storage.removeItem(StorageKeys.TrackPersistence);
  storage.removeItem(StorageKeys.TrackProgressPersistence);
}
