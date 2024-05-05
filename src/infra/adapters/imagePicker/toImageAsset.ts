import {ImageAsset} from './types';

export function toImageAsset<TAsset extends ImageAsset>(
  asset: TAsset,
): ImageAsset {
  return {
    fileName: asset.fileName,
    fileSize: asset.fileSize,
    type: asset.type,
    uri: asset.uri,
  };
}
