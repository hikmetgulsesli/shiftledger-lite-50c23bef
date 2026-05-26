import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_create_record(): ShiftLedgerLiteAction {
  return { type: 'openEditor' };
}

export const actCreateRecord = act_create_record;
export default act_create_record;
