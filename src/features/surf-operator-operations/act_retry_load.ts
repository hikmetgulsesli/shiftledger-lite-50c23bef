import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_retry_load(): ShiftLedgerLiteAction {
  return { type: 'storageStatus', status: 'saved' };
}

export const actRetryLoad = act_retry_load;
export default act_retry_load;
