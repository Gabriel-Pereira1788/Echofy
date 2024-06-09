export interface MetaData {
  nextPage: number | null;
  page: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface PaginatedResult<TData> {
  docs: TData[];
  meta: MetaData | null;
}

export interface PaginatedDocs<TData = unknown> {
  docs: TData[];
  nextPage: number | null;
  page: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}
export enum StorageKeys {
  AccessData = '@accessData',
  Credentials = '@credentials',
  SearchHistory = '@searchHistory',
  BookMarkPersistence = '@bookMarkPersistence',
  MinimizePlayer = '@minimizePlayer',
  TrackPersistence = '@trackPersistence',
  TrackProgressPersistence = '@trackProgressPersistence',
  SettingsPersistence = '@settingsPersistence',
  SyncBooks = '@syncBooks',
}
