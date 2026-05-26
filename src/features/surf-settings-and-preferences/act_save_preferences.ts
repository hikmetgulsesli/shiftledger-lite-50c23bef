import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_save_preferences(): ShiftLedgerLiteAction {
  return { type: 'storageStatus', status: 'saved' };
}

export const actSavePreferences = act_save_preferences;
export default act_save_preferences;
