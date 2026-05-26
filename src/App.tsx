import { useEffect, useMemo, useReducer, type Dispatch } from 'react';
import {
  InsightsShiftledgerLite,
  OperatorAssignmentShiftledgerLite,
  OperatorEditorShiftledgerLite,
  OperatorOperationsShiftledgerLite,
  SettingsAndPreferencesShiftledgerLite,
  StatusBoardShiftledgerLite,
  type InsightsShiftledgerLiteActionId,
  type OperatorAssignmentShiftledgerLiteActionId,
  type OperatorEditorShiftledgerLiteActionId,
  type OperatorOperationsShiftledgerLiteActionId,
  type SettingsAndPreferencesShiftledgerLiteActionId,
  type StatusBoardShiftledgerLiteActionId,
} from './screens';
import { shiftLedgerLiteFixture } from './__fixtures__/shiftledger-lite.fixture';
import {
  createShiftLedgerLiteSnapshot,
  reduceShiftLedgerLiteState,
  type ShiftLedgerLiteAction,
  type ShiftLedgerLiteScreen,
  type ShiftLedgerLiteState,
} from './features/shiftledger-lite/shiftledger-lite.store';
import {
  clearShiftLedgerLiteState,
  loadShiftLedgerLiteState,
  saveShiftLedgerLiteState,
} from './features/shiftledger-lite/shiftledger-lite.repo';
import { act_retry_load } from './features/surf-settings-and-preferences/act_retry_load';
import { act_save_preferences } from './features/surf-settings-and-preferences/act_save_preferences';
import { publishShiftLedgerLiteBridge } from './test/bridge';

const initialState = createShiftLedgerLiteSnapshot(
  shiftLedgerLiteFixture,
  loadShiftLedgerLiteState,
);

const navigationTargets: Partial<Record<string, ShiftLedgerLiteScreen>> = {
  'operations-1': 'operations',
  'status-board-2': 'statusBoard',
  'assignments-3': 'assignments',
  'insights-4': 'insights',
  'settings-5': 'settings',
};

export default function App() {
  const [state, dispatch] = useReducer(reduceShiftLedgerLiteState, initialState);

  useEffect(() => {
    try {
      if (state.storageStatus === 'cleared') {
        clearShiftLedgerLiteState();
      } else if (state.storageStatus !== 'recovering') {
        saveShiftLedgerLiteState(state);
      }
    } catch (error) {
      dispatch({
        type: 'storageError',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to persist ShiftLedger Lite data.',
      });
    }

    publishShiftLedgerLiteBridge(state);
  }, [state]);

  const runAction = (id: string) => {
    const screen = navigationTargets[id];
    if (screen) {
      dispatch({ type: 'navigate', screen });
      return;
    }

    const action = actionDispatch[id] ?? { type: 'panel', panel: id };
    dispatch(action);
  };

  const operationsActions = useMemo(
    () =>
      mapActions<OperatorOperationsShiftledgerLiteActionId>(
        [
          'sync-1',
          'create-record-2',
          'notifications-3',
          'account-circle-4',
          'filter-5',
          'sort-6',
          'edit-7',
          'edit-8',
          'edit-9',
          'retry-10',
          'edit-11',
          'close-12',
          'message-13',
          'assign-task-14',
          'operations-1',
          'status-board-2',
          'assignments-3',
          'insights-4',
          'settings-5',
          'support-6',
          'system-status-7',
          'documentation-8',
        ],
        runAction,
      ),
    [],
  );

  const statusBoardActions = useMemo(
    () =>
      mapActions<StatusBoardShiftledgerLiteActionId>(
        [
          'sync-1',
          'create-record-2',
          'notifications-3',
          'menu-4',
          'filter-list-5',
          'view-week-6',
          'more-horiz-7',
          'more-horiz-8',
          'edit-9',
          'more-horiz-10',
          'resolve-11',
          'more-horiz-12',
          'sign-off-13',
          'operations-1',
          'status-board-2',
          'assignments-3',
          'insights-4',
          'settings-5',
          'support-6',
          'system-status-7',
          'documentation-8',
        ],
        runAction,
      ),
    [],
  );

  const assignmentActions = useMemo(
    () =>
      mapActions<OperatorAssignmentShiftledgerLiteActionId>(
        [
          'create-record-1',
          'sync-2',
          'notifications-3',
          'account-circle-4',
          'bulk-assign-5',
          'more-vert-6',
          'more-vert-7',
          'more-vert-8',
          'more-vert-9',
          'execute-assignment-10',
          'history-11',
          'operations-1',
          'status-board-2',
          'assignments-3',
          'insights-4',
          'settings-5',
          'support-6',
          'system-status-7',
          'documentation-8',
        ],
        runAction,
      ),
    [],
  );

  const insightsActions = useMemo(
    () =>
      mapActions<InsightsShiftledgerLiteActionId>(
        [
          'menu-1',
          'sync-2',
          'create-record-3',
          'notifications-4',
          'account-circle-5',
          'filter-6',
          'export-7',
          'view-tasks-8',
          'more-vert-9',
          'operations-1',
          'status-board-2',
          'assignments-3',
          'insights-4',
          'settings-5',
          'support-6',
          'system-status-7',
          'documentation-8',
        ],
        runAction,
      ),
    [],
  );

  const settingsActions = useMemo(
    () =>
      mapActions<SettingsAndPreferencesShiftledgerLiteActionId>(
        [
          'sync-1',
          'create-record-2',
          'notifications-3',
          'account-circle-4',
          'edit-5',
          'edit-6',
          'reset-to-defaults-7',
          'reset-controls-8',
          'save-changes-9',
          'operations-1',
          'status-board-2',
          'assignments-3',
          'insights-4',
          'settings-5',
          'support-6',
          'system-status-7',
          'documentation-8',
        ],
        runAction,
      ),
    [],
  );

  const editorActions = useMemo(
    () =>
      mapActions<OperatorEditorShiftledgerLiteActionId>(
        ['go-back-1', 'cancel-2', 'save-record-3'],
        runAction,
      ),
    [],
  );

  return (
    <div
      data-setfarm-root="shiftledger-lite"
      className="flex min-h-screen flex-col bg-background text-on-surface"
    >
      <PersistenceStatus state={state} dispatch={dispatch} />
      {state.activeScreen === 'operations' && (
        <OperatorOperationsShiftledgerLite actions={operationsActions} />
      )}
      {state.activeScreen === 'statusBoard' && (
        <StatusBoardShiftledgerLite actions={statusBoardActions} />
      )}
      {state.activeScreen === 'assignments' && (
        <OperatorAssignmentShiftledgerLite actions={assignmentActions} />
      )}
      {state.activeScreen === 'insights' && (
        <InsightsShiftledgerLite actions={insightsActions} />
      )}
      {state.activeScreen === 'settings' && (
        <SettingsAndPreferencesShiftledgerLite actions={settingsActions} />
      )}
      {state.activeScreen === 'editor' && (
        <OperatorEditorShiftledgerLite actions={editorActions} />
      )}
    </div>
  );
}

const actionDispatch: Record<string, ShiftLedgerLiteAction> = {
  'sync-1': { type: 'storageStatus', status: 'synced' },
  'sync-2': { type: 'storageStatus', status: 'synced' },
  'create-record-1': { type: 'openEditor' },
  'create-record-2': { type: 'openEditor' },
  'create-record-3': { type: 'openEditor' },
  'edit-7': { type: 'openEditor', selectedRecordId: 'OPS-1042' },
  'edit-8': { type: 'openEditor', selectedRecordId: 'OPS-1043' },
  'edit-9': { type: 'openEditor', selectedRecordId: 'OPS-1044' },
  'retry-10': { type: 'storageStatus', status: 'saved' },
  'edit-11': { type: 'openEditor', selectedRecordId: 'OPS-1045' },
  'go-back-1': { type: 'navigate', screen: 'operations' },
  'cancel-2': { type: 'navigate', screen: 'operations' },
  'save-record-3': { type: 'storageStatus', status: 'saved' },
  'reset-to-defaults-7': { type: 'resetPreferences' },
  'reset-controls-8': { type: 'resetPreferences' },
  'save-changes-9': act_save_preferences(),
};

function PersistenceStatus({
  state,
  dispatch,
}: {
  state: ShiftLedgerLiteState;
  dispatch: Dispatch<ShiftLedgerLiteAction>;
}) {
  const copy = getPersistenceCopy(state.storageStatus, state.lastError);

  return (
    <section
      aria-live="polite"
      data-testid="persistence-feedback"
      className="border-b border-outline/20 bg-surface px-4 py-3 text-sm text-on-surface"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold">{copy.title}</span>
          <span className="ml-2 text-on-surface-variant">{copy.detail}</span>
        </p>
        <div className="flex gap-2">
          {state.storageStatus === 'recovering' && (
            <button
              type="button"
              data-action-id="retry-persistence"
              onClick={() =>
                dispatch(act_retry_load())
              }
              className="rounded-md border border-primary px-3 py-1 font-medium text-primary"
            >
              Retry
            </button>
          )}
          <button
            type="button"
            data-action-id="clear-data"
            onClick={() => dispatch({ type: 'clearPersistence' })}
            className="rounded-md border border-outline/40 px-3 py-1 font-medium text-on-surface"
          >
            Clear data
          </button>
        </div>
      </div>
    </section>
  );
}

function getPersistenceCopy(
  status: ShiftLedgerLiteState['storageStatus'],
  lastError: string | null,
) {
  switch (status) {
    case 'synced':
      return {
        title: 'Local storage synced.',
        detail: 'The latest shell state was saved on this device.',
      };
    case 'saved':
      return {
        title: 'Local copy saved.',
        detail: 'ShiftLedger Lite will reopen with these settings.',
      };
    case 'recovering':
      return {
        title: 'Local storage needs attention.',
        detail:
          lastError ??
          'Saved data could not be restored. Retry or clear the local copy.',
      };
    case 'cleared':
      return {
        title: 'Local data cleared.',
        detail: 'The app is using the default ShiftLedger Lite workspace.',
      };
    case 'ready':
    default:
      return {
        title: 'Local storage ready.',
        detail: 'ShiftLedger Lite can save this workspace on this device.',
      };
  }
}

function mapActions<ActionId extends string>(
  ids: ActionId[],
  onAction: (id: ActionId) => void,
) {
  return ids.reduce<Partial<Record<ActionId, () => void>>>((actions, id) => {
    actions[id] = () => onAction(id);
    return actions;
  }, {});
}
