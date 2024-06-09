import {bookService} from '@domain';
import {StorageKeys, storage} from '@infra';

async function syncBooks() {
  const haveBeenSynced = await storage.getItem(StorageKeys.SyncBooks);

  if (!haveBeenSynced) {
    await bookService.syncBooksData();
    storage.setItem(StorageKeys.SyncBooks, true);
  }
}

export const initializeService = {
  syncBooks,
};
