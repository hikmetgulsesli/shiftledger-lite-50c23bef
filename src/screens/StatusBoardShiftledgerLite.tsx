// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Board - ShiftLedger Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, Bell, CircleHelp, ClipboardCheck, Clock, Columns3, Ellipsis, Factory, LayoutDashboard, ListFilter, Menu, Pencil, Plus, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";


export type StatusBoardShiftledgerLiteActionId = "sync-1" | "create-record-2" | "notifications-3" | "menu-4" | "filter-list-5" | "view-week-6" | "more-horiz-7" | "more-horiz-8" | "edit-9" | "more-horiz-10" | "resolve-11" | "more-horiz-12" | "sign-off-13" | "operations-1" | "status-board-2" | "assignments-3" | "insights-4" | "settings-5" | "support-6" | "system-status-7" | "documentation-8";

export interface StatusBoardShiftledgerLiteProps {
  actions?: Partial<Record<StatusBoardShiftledgerLiteActionId, () => void>>;
}

export function StatusBoardShiftledgerLite({ actions }: StatusBoardShiftledgerLiteProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-4 bg-surface w-[240px] h-screen fixed left-0 top-0 border-r border-outline-variant z-20">
      <div className="px-6 mb-8">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">ShiftLedger Lite</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Operational Handoff</p>
      </div>
      <div className="flex-1 px-4 space-y-unit">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Factory aria-hidden={true} focusable="false" />
      <span>Operations</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-secondary font-bold border-r-2 border-secondary hover:bg-surface-container-high transition-colors bg-surface-container-high opacity-80 duration-150" href="#" data-action-id="status-board-2" onClick={actions?.["status-board-2"]}>
      <LayoutDashboard className="fill" aria-hidden={true} focusable="false" />
      <span>Status Board</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="assignments-3" onClick={actions?.["assignments-3"]}>
      <ClipboardCheck aria-hidden={true} focusable="false" />
      <span>Assignments</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      </div>
      <div className="px-4 mt-auto space-y-unit">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span>Support</span>
      </a>
      <div className="mt-4 px-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A small circular avatar image showing a professional headshot of a person, used in the application sidebar for user profile identification. Soft lighting, neutral background, modern corporate feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBfB0KEpkDWkdi-QbrQqhsYsg1B2Eisq5gBJAs-uQdCeibz9IGGsC6_YW1D6ZEkYijujpk3pSrb86OmxsfK0qCwJJpm_kI5ko2VY88OA04XIqJ0XIatEOfbvogTSTgKET7neelCbc8-a6f2FnNyedzzf1-R5S-VJgD7dz5idOuO-YU_ZjxcCOpzRnxrdJ5Jt_Y4q3udXb08aaWHrA1FJ4JPFjRr3jgNXVn8l06z40BXjg-gkpt1cSwyttgttWdoN-qRLl5PFJLxGVc" />
      </div>
      </div>
      </div>
      </nav>
      {/* TopAppBar */}
      <header className="flex justify-between items-center ml-0 md:ml-[240px] px-container-padding bg-surface-container-lowest docked full-width top-0 h-12 border-b border-outline-variant z-10 sticky">
      <div className="flex items-center gap-4 flex-1">
      <div className="relative w-64">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-[32px] pl-8 pr-3 bg-surface border border-outline-variant rounded text-body-sm font-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors" placeholder="Search records..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="h-[32px] px-3 flex items-center gap-2 bg-surface border border-outline-variant rounded hover:bg-surface-container transition-colors text-on-surface font-label-caps text-label-caps" type="button" data-action-id="sync-1" onClick={actions?.["sync-1"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                      Sync
                  </button>
      <button className="h-[32px] px-4 flex items-center gap-2 bg-primary text-on-primary rounded hover:opacity-90 transition-opacity font-label-caps text-label-caps" type="button" data-action-id="create-record-2" onClick={actions?.["create-record-2"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      Create Record
                  </button>
      <div className="h-6 w-px bg-outline-variant mx-2"></div>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors md:hidden" type="button" aria-label="Menu" data-action-id="menu-4" onClick={actions?.["menu-4"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content (Kanban Board) */}
      <main className="ml-0 md:ml-[240px] p-container-padding h-[calc(100vh-48px-32px)] overflow-hidden flex flex-col bg-surface-container-low">
      {/* Board Header Action Bar */}
      <div className="flex justify-between items-end mb-4 shrink-0">
      <div>
      <h2 className="font-display text-display text-on-surface">Active Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Real-time status tracking for current shift</p>
      </div>
      <div className="flex gap-2">
      <button className="p-1 rounded bg-surface border border-outline-variant text-on-surface hover:bg-surface-container" type="button" aria-label="Filter List" data-action-id="filter-list-5" onClick={actions?.["filter-list-5"]}>
      <ListFilter className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-1 rounded bg-surface border border-outline-variant text-on-surface hover:bg-surface-container" type="button" aria-label="View Week" data-action-id="view-week-6" onClick={actions?.["view-week-6"]}>
      <Columns3 className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Kanban Canvas */}
      <div className="flex-1 flex gap-gutter pb-4 overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      {/* Column 1: Ready */}
      <div className="w-[320px] shrink-0 flex flex-col bg-surface-container-lowest rounded-lg border border-outline-variant">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-outline"></div>
      <h3 className="font-label-caps text-label-caps text-on-surface">READY</h3>
      <span className="bg-surface-variant text-on-surface-variant px-1.5 rounded text-[10px] font-data-mono">4</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="More Horiz" data-action-id="more-horiz-7" onClick={actions?.["more-horiz-7"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 p-3 space-y-3 overflow-y-auto kanban-col">
      {/* Card 1 */}
      <div className="bg-surface border border-outline-variant rounded p-3 hover:border-secondary transition-colors cursor-pointer group shadow-sm">
      <div className="flex justify-between items-start mb-2">
      <span className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">OP-4921</span>
      <span className="bg-surface-container-high text-on-surface px-1.5 py-0.5 rounded text-[10px] font-label-caps">P3</span>
      </div>
      <h4 className="font-headline-md text-body-base font-semibold text-on-surface mb-2 leading-tight">Server Rack B4 Maintenance</h4>
      <div className="flex items-center gap-3 mt-3">
      <div className="flex -space-x-2">
      <img alt="Assignee" className="w-6 h-6 rounded-full border border-surface" data-alt="Small circular avatar showing a person's face, representing an assigned team member on a task card. Professional headshot, neutral lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0OV9QyMJhNgS_pKD9QEGtoW5ZCjhsnFNiOOGqe-iVB8zA82U6QJmEsrg9tz6MLc49y_gkHyZrdqzNJbOL90cgUyH4yo-fm89xT_gWfpJwg9q4qdJa40Mx713apDguYNtc1cgzQ9oKxbZ_LFL_Nv3CfhkqZPXIqaUKyH7UFmAxgAX46sFBml5gquOsTyjn0j4bNvLnu7odRyB130TeI8cLWDveWAaiwHMgr_bkqdWPyLOFLp-f10quZd4748vw-aJvyX53AyOoC7rm" />
      </div>
      <div className="flex items-center gap-1 text-on-surface-variant font-data-mono text-[10px] ml-auto">
      <Clock className="text-[14px]" aria-hidden={true} focusable="false" />
                                      2h
                                  </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column 2: In Progress */}
      <div className="w-[320px] shrink-0 flex flex-col bg-surface-container-lowest rounded-lg border border-outline-variant">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <h3 className="font-label-caps text-label-caps text-on-surface">IN PROGRESS</h3>
      <span className="bg-surface-variant text-on-surface-variant px-1.5 rounded text-[10px] font-data-mono">2</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="More Horiz" data-action-id="more-horiz-8" onClick={actions?.["more-horiz-8"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 p-3 space-y-3 overflow-y-auto kanban-col">
      {/* Card 3 */}
      <div className="bg-surface border border-secondary rounded p-3 hover:shadow-md transition-shadow cursor-pointer group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
      <div className="flex justify-between items-start mb-2 pl-1">
      <span className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">OP-4918</span>
      <span className="bg-error-container text-on-error-container px-1.5 py-0.5 rounded text-[10px] font-label-caps">P1</span>
      </div>
      <h4 className="font-headline-md text-body-base font-semibold text-on-surface mb-2 leading-tight pl-1">Core Database Sync Migration</h4>
      <div className="flex items-center gap-2 mt-2 pl-1">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
      <span className="text-[11px] font-body-sm text-secondary">Active - 45m</span>
      </div>
      <div className="flex items-center gap-3 mt-3 pl-1 border-t border-outline-variant pt-2">
      <div className="flex -space-x-2">
      <img alt="Assignee" className="w-6 h-6 rounded-full border border-surface" data-alt="Small circular avatar of a tech worker, representing a task owner. Neutral background, professional look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyksE0oiR7lXEFtaYltUYHfdZbOL9m9Ajp-4LmPER1mzy8amfpjDXrgRTj1GWv-iWVUClbO6paGQMnWGj-ur35lkoTfUtjTROdOT72m-qHhIz-vcaFdHVMfZM-Qa6my-CWlDcnAW1Ftv6Sr8m-k3lU2vY8UPoO7_3FDY7ozNQ_P2ROs08ZQPuMIvuxXxWjRjVSyY8q5z7FbVGT55gIOpqQJ7YCjZsT9diANV5nP4SxtWElEuHopXlvM6ezKfhcxHYn_RPZ4S3K-1bw" />
      <div className="w-6 h-6 rounded-full border border-surface bg-surface-container flex items-center justify-center text-[10px] font-data-mono">+1</div>
      </div>
      <button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-secondary" type="button" aria-label="Edit" data-action-id="edit-9" onClick={actions?.["edit-9"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Column 3: Blocked */}
      <div className="w-[320px] shrink-0 flex flex-col bg-surface-container-lowest rounded-lg border border-outline-variant">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-error"></div>
      <h3 className="font-label-caps text-label-caps text-on-surface">BLOCKED</h3>
      <span className="bg-surface-variant text-on-surface-variant px-1.5 rounded text-[10px] font-data-mono">1</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="More Horiz" data-action-id="more-horiz-10" onClick={actions?.["more-horiz-10"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 p-3 space-y-3 overflow-y-auto kanban-col">
      {/* Card 4 */}
      <div className="bg-error-container border border-error rounded p-3 cursor-pointer group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-data-mono text-data-mono text-on-error-container text-[11px]">OP-4915</span>
      <span className="bg-surface-container-high text-on-surface px-1.5 py-0.5 rounded text-[10px] font-label-caps border border-outline-variant">P2</span>
      </div>
      <h4 className="font-headline-md text-body-base font-semibold text-on-error-container mb-2 leading-tight">Network Switch Replacement Floor 3</h4>
      <div className="bg-surface/50 p-2 rounded text-[11px] font-body-sm text-on-error-container border border-error/20 flex gap-2 items-start mt-2">
      <TriangleAlert className="text-[14px] text-error shrink-0" aria-hidden={true} focusable="false" />
      <span>Awaiting clearance from facilities team. Blocked for 4h.</span>
      </div>
      <div className="flex items-center gap-3 mt-3">
      <div className="flex -space-x-2">
      <img alt="Assignee" className="w-6 h-6 rounded-full border border-surface" data-alt="Avatar of an engineer facing a blocked task. Professional headshot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3MbvfLrEvJKiPXjkG2LXV3l9k09c8C1KwqeYeV9sB82IdRc83yNs4lv3BeUmJSP-df991K0sQ_qdjUoZiQnWskadrvFDdg8WWDDfNsxQgzX9lqGeRapjC2FbdKH7Y3NMbN-G2s7LmWpCV2zQ-O6GZ5W5EkZSKveOCS6oULZXPwoDSqk8F78yTARfngeZPlFJ4pHpHANx4gYSJFZa1C18CQwJm8yf5Dfcq1O58Ar5-Df0z4jXcYnlLHkot-Vh7KM1Bi-71oytu-Zy1" />
      </div>
      <button className="ml-auto text-error hover:text-on-error-container text-[11px] font-label-caps flex items-center gap-1 bg-surface/50 px-2 py-1 rounded border border-error/20" type="button" data-action-id="resolve-11" onClick={actions?.["resolve-11"]}>
                                      RESOLVE
                                  </button>
      </div>
      </div>
      </div>
      </div>
      {/* Column 4: Handoff Pending */}
      <div className="w-[320px] shrink-0 flex flex-col bg-surface-container-lowest rounded-lg border border-outline-variant">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-tertiary-container"></div>
      <h3 className="font-label-caps text-label-caps text-on-surface">HANDOFF PENDING</h3>
      <span className="bg-surface-variant text-on-surface-variant px-1.5 rounded text-[10px] font-data-mono">3</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="More Horiz" data-action-id="more-horiz-12" onClick={actions?.["more-horiz-12"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 p-3 space-y-3 overflow-y-auto kanban-col opacity-75 hover:opacity-100 transition-opacity">
      {/* Card 5 */}
      <div className="bg-surface border border-outline-variant rounded p-3 hover:border-tertiary-container transition-colors cursor-pointer group shadow-sm">
      <div className="flex justify-between items-start mb-2">
      <span className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">OP-4902</span>
      </div>
      <h4 className="font-headline-md text-body-base font-semibold text-on-surface mb-2 leading-tight text-on-surface-variant line-through">Routine HVAC Inspection</h4>
      <div className="flex items-center gap-3 mt-3 pt-2 border-t border-outline-variant">
      <button className="w-full bg-surface-container text-on-surface hover:bg-surface-variant py-1 rounded font-label-caps text-[10px] transition-colors" type="button" data-action-id="sign-off-13" onClick={actions?.["sign-off-13"]}>
                                      SIGN OFF
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="flex justify-between items-center px-4 fixed bottom-0 right-0 left-0 md:left-[240px] h-8 bg-surface-container border-t border-outline-variant opacity-90 z-10">
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">
                  ShiftLedger v2.4.1 • Last Sync: 2m ago
              </div>
      <div className="flex gap-4">
      <a className="font-label-caps text-label-caps font-bold text-on-surface-variant hover:underline text-[10px]" href="#" data-action-id="system-status-7" onClick={actions?.["system-status-7"]}>System Status</a>
      <a className="font-label-caps text-label-caps font-bold text-on-surface-variant hover:underline text-[10px]" href="#" data-action-id="documentation-8" onClick={actions?.["documentation-8"]}>Documentation</a>
      </div>
      </footer>
    </>
  );
}
