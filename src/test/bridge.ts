import type { ShiftLedgerLiteState } from '../features/shiftledger-lite/shiftledger-lite.store';

declare global {
  interface Window {
    app?: {
      activeScreen: ShiftLedgerLiteState['activeScreen'];
      route: ShiftLedgerLiteState['activeScreen'];
      selectedRecord: string | null;
      counts: ShiftLedgerLiteState['counts'];
      storageStatus: ShiftLedgerLiteState['storageStatus'];
      lastError: string | null;
      activePanel: string;
    };
  }
}

export function publishShiftLedgerLiteBridge(state: ShiftLedgerLiteState) {
  if (typeof window === 'undefined') {
    return;
  }

  window.app = {
    activeScreen: state.activeScreen,
    route: state.activeScreen,
    selectedRecord: state.selectedRecordId,
    counts: state.counts,
    storageStatus: state.storageStatus,
    lastError: state.lastError,
    activePanel: state.activePanel,
  };
}
