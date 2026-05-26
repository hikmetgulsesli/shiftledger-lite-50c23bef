import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_filter_insights(filter = 'exceptions'): ShiftLedgerLiteAction {
  return { type: 'panel', panel: `insights-filter:${filter}` };
}

export const actFilterInsights = act_filter_insights;
export default act_filter_insights;
