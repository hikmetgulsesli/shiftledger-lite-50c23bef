// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - ShiftLedger Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowRight, ArrowUp, BarChart3, Bell, BellRing, CheckCheck, CircleHelp, CircleUserRound, ClipboardCheck, Download, EllipsisVertical, Factory, LayoutDashboard, ListFilter, Menu, Search, Settings, TrendingUp, TriangleAlert } from "lucide-react";


export type InsightsShiftledgerLiteActionId = "menu-1" | "sync-2" | "create-record-3" | "notifications-4" | "account-circle-5" | "filter-6" | "export-7" | "view-tasks-8" | "more-vert-9" | "operations-1" | "status-board-2" | "assignments-3" | "insights-4" | "settings-5" | "support-6" | "system-status-7" | "documentation-8";

export interface InsightsShiftledgerLiteProps {
  actions?: Partial<Record<InsightsShiftledgerLiteActionId, () => void>>;
}

export function InsightsShiftledgerLite({ actions }: InsightsShiftledgerLiteProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col w-[240px] h-screen fixed left-0 top-0 border-r border-outline-variant bg-surface py-4 z-50">
      <div className="px-6 mb-8">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">ShiftLedger Lite</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Operational Handoff</p>
      </div>
      <div className="flex-1 overflow-y-auto px-4 space-y-2">
      <a className="flex items-center space-x-3 px-3 py-2 rounded font-body-base text-body-base text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Factory className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Operations</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 rounded font-body-base text-body-base text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="status-board-2" onClick={actions?.["status-board-2"]}>
      <LayoutDashboard className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Status Board</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 rounded font-body-base text-body-base text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="assignments-3" onClick={actions?.["assignments-3"]}>
      <ClipboardCheck className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Assignments</span>
      </a>
      {/* Active State */}
      <a className="flex items-center space-x-3 px-3 py-2 rounded font-body-base text-body-base text-secondary font-bold border-r-2 border-secondary bg-surface-container-high opacity-80 duration-150" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px] text-secondary" aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      </div>
      <div className="mt-auto px-4 pt-4 border-t border-outline-variant space-y-2">
      <a className="flex items-center space-x-3 px-3 py-2 rounded font-body-base text-body-base text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 rounded font-body-base text-body-base text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 md:ml-[240px] flex flex-col min-h-screen">
      {/* TopAppBar */}
      <header className="flex justify-between items-center px-container-padding docked full-width top-0 h-12 border-b border-outline-variant bg-surface-container-lowest sticky z-40">
      <div className="flex items-center space-x-4 w-1/3">
      {/* Mobile Menu Button (hidden on md) */}
      <button className="md:hidden p-1 text-on-surface-variant hover:bg-surface-container rounded transition-colors" type="button" aria-label="Menu" data-action-id="menu-1" onClick={actions?.["menu-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="relative w-full max-w-xs hidden md:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-3 bg-surface-container border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:border-secondary focus:ring-0 transition-colors" placeholder="Search..." type="text" />
      </div>
      </div>
      <div className="flex items-center justify-center w-1/3">
      <h2 className="font-headline-md text-headline-md font-black text-primary md:hidden">ShiftLedger Lite</h2>
      </div>
      <div className="flex items-center justify-end space-x-2 w-1/3">
      <button className="h-8 px-3 flex items-center bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded font-label-caps text-label-caps text-primary transition-colors" type="button" data-action-id="sync-2" onClick={actions?.["sync-2"]}>
                          Sync
                      </button>
      <button className="h-8 px-3 flex items-center bg-primary hover:bg-primary/90 text-on-primary rounded font-label-caps text-label-caps transition-colors" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
                          Create Record
                      </button>
      <div className="h-8 border-l border-outline-variant mx-2"></div>
      <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded transition-colors" type="button" aria-label="Notifications" data-action-id="notifications-4" onClick={actions?.["notifications-4"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded transition-colors" type="button" aria-label="Account Circle" data-action-id="account-circle-5" onClick={actions?.["account-circle-5"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 p-container-padding pb-20 md:pb-12 space-y-6 overflow-x-hidden">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 h-auto sm:h-12 border-b border-outline-variant pb-4 sm:pb-0">
      <div className="flex items-center gap-2">
      <h1 className="font-display text-display text-on-surface">Insights</h1>
      <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-sm uppercase">Last 24h</span>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 h-8 px-3 border border-outline-variant bg-surface hover:bg-surface-container rounded font-label-caps text-label-caps text-on-surface-variant transition-colors" type="button" data-action-id="filter-6" onClick={actions?.["filter-6"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                              Filter
                          </button>
      <button className="flex items-center gap-2 h-8 px-3 bg-secondary hover:bg-secondary/90 text-on-secondary rounded font-label-caps text-label-caps transition-colors shadow-sm" type="button" data-action-id="export-7" onClick={actions?.["export-7"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                              Export
                          </button>
      </div>
      </div>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Metric Card 1 */}
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col justify-between hover:bg-surface-container-low transition-colors group">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Shift Efficiency</span>
      <TrendingUp className="text-[18px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="mt-4">
      <div className="font-display text-display text-on-surface">94.2%</div>
      <div className="font-data-mono text-data-mono text-secondary mt-1 flex items-center gap-1">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> 2.1%
                              </div>
      </div>
      </div>
      {/* Metric Card 2 */}
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col justify-between hover:bg-surface-container-low transition-colors group">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Handoff Completion</span>
      <CheckCheck className="text-[18px] text-outline" aria-hidden={true} focusable="false" />
      </div>
      <div className="mt-4">
      <div className="font-display text-display text-on-surface">100%</div>
      <div className="font-data-mono text-data-mono text-outline mt-1">All logs signed</div>
      </div>
      </div>
      {/* Metric Card 3 */}
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col justify-between hover:bg-surface-container-low transition-colors group">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Open Incidents</span>
      <TriangleAlert className="text-[18px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="mt-4">
      <div className="font-display text-display text-on-surface">3</div>
      <div className="font-data-mono text-data-mono text-error mt-1 flex items-center gap-1">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> 1 new
                              </div>
      </div>
      </div>
      {/* Metric Card 4 (Actionable Hint) */}
      <div className="bg-error-container border border-error/20 rounded p-4 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-error/5 rounded-bl-full"></div>
      <div className="flex justify-between items-start relative z-10">
      <span className="font-label-caps text-label-caps text-on-error-container uppercase">Attention Req</span>
      <BellRing className="text-[18px] text-on-error-container" aria-hidden={true} focusable="false" />
      </div>
      <div className="mt-4 relative z-10">
      <div className="font-body-base text-body-base font-semibold text-on-error-container leading-tight">3 tasks aging in Blocked status</div>
      <button className="mt-2 font-label-caps text-label-caps text-on-error-container hover:underline flex items-center gap-1" type="button" data-action-id="view-tasks-8" onClick={actions?.["view-tasks-8"]}>
                                  View Tasks <ArrowRight className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* State Distribution Chart Area */}
      <div className="lg:col-span-2 bg-surface border border-outline-variant rounded flex flex-col min-h-[300px]">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Task Status Breakdown</h3>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" aria-label="More Vert" data-action-id="more-vert-9" onClick={actions?.["more-vert-9"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-center items-center relative">
      {/* Placeholder for a lightweight, CSS-based visualization or a simple structural representation */}
      <div className="w-full h-4 bg-surface-container rounded-full overflow-hidden flex mb-8">
      <div className="h-full bg-secondary w-3/5" title="Completed"></div>
      <div className="h-full bg-tertiary-fixed-dim w-1/4" title="In Progress"></div>
      <div className="h-full bg-error w-[15%]" title="Blocked"></div>
      </div>
      <div className="flex justify-center gap-6 w-full px-4">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-secondary"></div>
      <span className="font-data-mono text-data-mono text-on-surface-variant">60% Done</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
      <span className="font-data-mono text-data-mono text-on-surface-variant">25% Active</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-error"></div>
      <span className="font-data-mono text-data-mono text-on-surface-variant">15% Blocked</span>
      </div>
      </div>
      </div>
      </div>
      {/* Recent Activity Timeline */}
      <div className="bg-surface border border-outline-variant rounded flex flex-col h-[300px]">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest sticky top-0">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Shift Timeline</h3>
      </div>
      <div className="p-4 flex-1 overflow-y-auto space-y-4">
      {/* Timeline Item */}
      <div className="flex gap-3 relative">
      <div className="flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-secondary z-10 mt-1.5"></div>
      <div className="w-px h-full bg-outline-variant absolute top-3.5 bottom-[-1rem]"></div>
      </div>
      <div className="flex-1 pb-4">
      <div className="flex justify-between items-start">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Handoff Initiated</span>
      <span className="font-data-mono text-data-mono text-outline">08:00</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">By Sarah J.</p>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="flex gap-3 relative">
      <div className="flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-error z-10 mt-1.5"></div>
      <div className="w-px h-full bg-outline-variant absolute top-3.5 bottom-[-1rem]"></div>
      </div>
      <div className="flex-1 pb-4">
      <div className="flex justify-between items-start">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Alert: Server Load</span>
      <span className="font-data-mono text-data-mono text-outline">09:15</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Node-A CPU spike &gt; 90%</p>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="flex gap-3 relative">
      <div className="flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-outline z-10 mt-1.5"></div>
      </div>
      <div className="flex-1 pb-0">
      <div className="flex justify-between items-start">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Task Assigned</span>
      <span className="font-data-mono text-data-mono text-outline">10:30</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">DB backup verification</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="flex justify-between items-center px-4 fixed bottom-0 right-0 left-0 md:left-[240px] h-8 border-t border-outline-variant bg-surface-container opacity-90 z-40 hidden sm:flex">
      <div className="font-data-mono text-data-mono text-on-surface-variant">
                      ShiftLedger v2.4.1 • Last Sync: 2m ago
                  </div>
      <div className="flex space-x-4">
      <a className="font-data-mono text-data-mono text-on-surface-variant hover:underline" href="#" data-action-id="system-status-7" onClick={actions?.["system-status-7"]}>System Status</a>
      <a className="font-data-mono text-data-mono text-on-surface-variant hover:underline" href="#" data-action-id="documentation-8" onClick={actions?.["documentation-8"]}>Documentation</a>
      </div>
      </footer>
      </div>
    </>
  );
}
