import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_cancel_edit(): ShiftLedgerLiteAction {
  return { type: 'navigate', screen: 'operations' };
}

export const actCancelEdit = act_cancel_edit;
export default act_cancel_edit;
