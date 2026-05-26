import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_search_records(query = ''): ShiftLedgerLiteAction {
  const normalizedQuery = query.trim();

  return {
    type: 'panel',
    panel: normalizedQuery
      ? `operations-search:${normalizedQuery}`
      : 'operations-search',
  };
}

export const actSearchRecords = act_search_records;
export default act_search_records;
