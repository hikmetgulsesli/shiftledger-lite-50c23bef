import type { ShiftLedgerLiteFixture } from '../features/shiftledger-lite/shiftledger-lite.store';

export const shiftLedgerLiteFixture: ShiftLedgerLiteFixture = {
  defaultScreen: 'operations',
  records: [
    {
      id: 'OPS-1042',
      title: 'Inbound reconciliation',
      status: 'active',
      owner: 'Avery Stone',
    },
    {
      id: 'OPS-1043',
      title: 'Equipment release',
      status: 'pending',
      owner: 'Mina Patel',
    },
    {
      id: 'OPS-1044',
      title: 'Exception review',
      status: 'blocked',
      owner: 'Jon Bell',
    },
    {
      id: 'OPS-1045',
      title: 'Night shift closeout',
      status: 'scheduled',
      owner: 'Nora Chen',
    },
  ],
};
