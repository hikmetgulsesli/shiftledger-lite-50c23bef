import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_update_record_status(
  recordId: string,
  status: 'resolved' | 'signed-off' = 'resolved',
): ShiftLedgerLiteAction {
  return {
    type: 'panel',
    panel: `status-board-update:${recordId}:${status}`,
  };
}

export const actUpdateRecordStatus = act_update_record_status;
export default act_update_record_status;
