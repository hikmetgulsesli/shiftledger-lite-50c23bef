import type { ShiftLedgerLiteAction } from '../shiftledger-lite/shiftledger-lite.store';

export function act_search_records(query = 'status-board') {
  const normalizedQuery = query.trim();

  return {
    type: 'panel',
    panel: normalizedQuery
      ? `status-board-search:${normalizedQuery}`
      : 'status-board-search',
  } satisfies ShiftLedgerLiteAction;
}

export const actSearchRecords = act_search_records;
export default act_search_records;
