import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_export_summary(format = 'summary'): ShiftLedgerLiteAction {
  return { type: 'panel', panel: `insights-export:${format}` };
}

export const actExportSummary = act_export_summary;
export default act_export_summary;
