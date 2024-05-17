import {netInfo} from './implementation';
import {NetStatusImpl} from './types';

export let netStatus: NetStatusImpl = netInfo;

export function setNetStatusImpl(netStatusImpl: NetStatusImpl) {
  netStatus = netStatusImpl;
}
