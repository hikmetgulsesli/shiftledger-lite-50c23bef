import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_select_record(recordId: string): ShiftLedgerLiteAction {
  return { type: 'openEditor', selectedRecordId: recordId };
}

export const actSelectRecord = act_select_record;
export default act_select_record;
