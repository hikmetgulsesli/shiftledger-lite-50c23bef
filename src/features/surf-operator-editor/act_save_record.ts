import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_save_record(): ShiftLedgerLiteAction {
  return { type: 'storageStatus', status: 'saved' };
}

export const actSaveRecord = act_save_record;
export default act_save_record;
