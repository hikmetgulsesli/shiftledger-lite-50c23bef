export type ShiftLedgerLiteScreen =
  | 'operations'
  | 'statusBoard'
  | 'assignments'
  | 'insights'
  | 'settings'
  | 'editor';

export type ShiftLedgerLiteStorageStatus =
  | 'ready'
  | 'synced'
  | 'saved'
  | 'recovering';

export interface ShiftLedgerLiteRecord {
  id: string;
  title: string;
  status: string;
  owner: string;
}

export interface ShiftLedgerLiteFixture {
  defaultScreen: ShiftLedgerLiteScreen;
  records: ShiftLedgerLiteRecord[];
}

export interface ShiftLedgerLiteState {
  activeScreen: ShiftLedgerLiteScreen;
  selectedRecordId: string | null;
  storageStatus: ShiftLedgerLiteStorageStatus;
  lastError: string | null;
  activePanel: string;
  counts: {
    records: number;
    active: number;
    blocked: number;
  };
  records: ShiftLedgerLiteRecord[];
}

export type ShiftLedgerLiteAction =
  | { type: 'navigate'; screen: ShiftLedgerLiteScreen }
  | { type: 'openEditor'; selectedRecordId?: string }
  | { type: 'panel'; panel: string }
  | { type: 'storageStatus'; status: ShiftLedgerLiteStorageStatus }
  | { type: 'storageError'; message: string }
  | { type: 'resetPreferences' };

export type ShiftLedgerLiteLoader = () => Partial<ShiftLedgerLiteState> | null;

export function createShiftLedgerLiteSnapshot(
  fixture: ShiftLedgerLiteFixture,
  loadState?: ShiftLedgerLiteLoader,
): ShiftLedgerLiteState {
  const base = normalizeState({
    activeScreen: fixture.defaultScreen,
    selectedRecordId: fixture.records[0]?.id ?? null,
    storageStatus: 'ready',
    lastError: null,
    activePanel: 'operations',
    counts: createCounts(fixture.records),
    records: fixture.records,
  });

  try {
    const persisted = loadState?.();
    if (!persisted) {
      return base;
    }

    return normalizeState({
      ...base,
      ...persisted,
      records: fixture.records,
      counts: createCounts(fixture.records),
      storageStatus: 'ready',
      lastError: null,
    });
  } catch (error) {
    return {
      ...base,
      storageStatus: 'recovering',
      lastError:
        error instanceof Error
          ? error.message
          : 'Unable to restore saved ShiftLedger Lite state.',
    };
  }
}

export function reduceShiftLedgerLiteState(
  state: ShiftLedgerLiteState,
  action: ShiftLedgerLiteAction,
): ShiftLedgerLiteState {
  switch (action.type) {
    case 'navigate':
      return normalizeState({
        ...state,
        activeScreen: action.screen,
        activePanel: action.screen,
      });
    case 'openEditor':
      return normalizeState({
        ...state,
        activeScreen: 'editor',
        activePanel: 'editor',
        selectedRecordId: action.selectedRecordId ?? state.selectedRecordId,
      });
    case 'panel':
      return normalizeState({
        ...state,
        activePanel: action.panel,
      });
    case 'storageStatus':
      return normalizeState({
        ...state,
        storageStatus: action.status,
        lastError: null,
      });
    case 'storageError':
      return normalizeState({
        ...state,
        storageStatus: 'recovering',
        lastError: action.message,
      });
    case 'resetPreferences':
      return normalizeState({
        ...state,
        activePanel: 'settings',
        storageStatus: 'saved',
        lastError: null,
      });
    default:
      return state;
  }
}

function normalizeState(state: ShiftLedgerLiteState): ShiftLedgerLiteState {
  return {
    ...state,
    selectedRecordId:
      state.selectedRecordId ?? state.records[0]?.id ?? null,
    counts: createCounts(state.records),
  };
}

function createCounts(records: ShiftLedgerLiteRecord[]) {
  return {
    records: records.length,
    active: records.filter((record) => record.status === 'active').length,
    blocked: records.filter((record) => record.status === 'blocked').length,
  };
}
