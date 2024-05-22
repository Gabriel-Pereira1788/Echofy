export interface DownloadConfig {
  url: string;
  callbackProgress: (progress: number) => void;
}
export interface FileSystemImpl {
  download: (config: DownloadConfig) => Promise<IDownloadResumable>;
}

export interface IDownloadResumable {
  // uri?: string;
  init: () => Promise<string | undefined>;
  pause: () => Promise<void>;
  resume: () => Promise<string | undefined>;
}
