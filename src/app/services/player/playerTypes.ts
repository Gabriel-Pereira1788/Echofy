export type PlayerStatus = 'play' | 'pause';
export interface PlayerState {
  title: string;
  author: string;
  coverURI: string;
  currentStatus: PlayerStatus;
}

export interface PlayerStore {
  player: PlayerState | null;
  show: (_player: PlayerState) => void;
  changeStatus: (_status: PlayerStatus) => void;
  hide: () => void;
}
