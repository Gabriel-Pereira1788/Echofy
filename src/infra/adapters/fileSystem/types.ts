export interface DownloadConfig {
  url: string;
  callbackProgress: (progress: number) => void;
}
export interface FileSystemImpl {
  download: (config: DownloadConfig) => Promise<IDownloadResumable>;
}

export interface IDownloadResumable {
  uri?: string;
  pause: () => Promise<void>;
  resume: () => Promise<void>;
}
