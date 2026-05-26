import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_assign_record(recordId?: string): ShiftLedgerLiteAction {
  return {
    type: 'panel',
    panel: recordId ? `assignment-queued:${recordId}` : 'assignment-queued',
  };
}

export const actAssignRecord = act_assign_record;
export default act_assign_record;
