import {netStatus} from '@infra';

async function getCurrentStatus() {
  return netStatus.getConnectionStatus();
}

export const connection = {
  getCurrentStatus,
};
