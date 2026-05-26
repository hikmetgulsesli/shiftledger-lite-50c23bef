import type { ShiftLedgerLiteState } from './shiftledger-lite.store';

const storageKey = 'shiftledger-lite:shell';

type PersistedShiftLedgerLiteState = Pick<
  ShiftLedgerLiteState,
  'activeScreen' | 'selectedRecordId' | 'activePanel'
>;

export function loadShiftLedgerLiteState():
  | Partial<ShiftLedgerLiteState>
  | null {
  if (!canUseStorage()) {
    return null;
  }

  const rawValue = window.localStorage.getItem(storageKey);
  if (!rawValue) {
    return null;
  }

  return JSON.parse(rawValue) as PersistedShiftLedgerLiteState;
}

export function saveShiftLedgerLiteState(state: ShiftLedgerLiteState) {
  if (!canUseStorage()) {
    return;
  }

  const persisted: PersistedShiftLedgerLiteState = {
    activeScreen: state.activeScreen,
    selectedRecordId: state.selectedRecordId,
    activePanel: state.activePanel,
  };

  window.localStorage.setItem(storageKey, JSON.stringify(persisted));
}

export function clearShiftLedgerLiteState() {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(storageKey);
}

function canUseStorage() {
  return typeof window !== 'undefined' && Boolean(window.localStorage);
}
