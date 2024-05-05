export interface ImageAsset {
  fileName?: string;
  uri?: string;
  fileSize?: number;
  type?: string;
  base64?: string;
}

export interface ImagePickerImpl {
  openLibrary: () => Promise<ImageAsset | null>;
}
