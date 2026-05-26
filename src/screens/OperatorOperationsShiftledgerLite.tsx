// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Operator Operations - ShiftLedger Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUpDown, BarChart3, Bell, CircleHelp, CircleUserRound, ClipboardCheck, Factory, History, LayoutDashboard, ListChecks, ListFilter, RefreshCw, RefreshCwOff, Search, Settings, Terminal, TriangleAlert, Users, X } from "lucide-react";


export type OperatorOperationsShiftledgerLiteActionId = "sync-1" | "create-record-2" | "notifications-3" | "account-circle-4" | "filter-5" | "sort-6" | "edit-7" | "edit-8" | "edit-9" | "retry-10" | "edit-11" | "close-12" | "message-13" | "assign-task-14" | "operations-1" | "status-board-2" | "assignments-3" | "insights-4" | "settings-5" | "support-6" | "system-status-7" | "documentation-8";

export interface OperatorOperationsShiftledgerLiteProps {
  actions?: Partial<Record<OperatorOperationsShiftledgerLiteActionId, () => void>>;
}

export function OperatorOperationsShiftledgerLite({ actions }: OperatorOperationsShiftledgerLiteProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="w-[240px] h-screen fixed left-0 top-0 bg-surface dark:bg-inverse-surface border-r border-outline-variant dark:border-outline flex flex-col h-full py-4 z-20">
      {/* Brand / Header */}
      <div className="px-container-padding mb-8">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-background truncate" title="ShiftLedger Lite">ShiftLedger Lite</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant truncate mt-1">Operational Handoff</p>
      </div>
      {/* Main Nav Tabs */}
      <ul className="flex-1 space-y-unit px-unit">
      <li>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT bg-surface-container-high dark:bg-surface-container-highest text-secondary dark:text-secondary-fixed-dim font-bold border-r-2 border-secondary opacity-80 duration-150 transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Factory aria-hidden={true} focusable="false" />
      <span>Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="status-board-2" onClick={actions?.["status-board-2"]}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
      <span>Status Board</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="assignments-3" onClick={actions?.["assignments-3"]}>
      <ClipboardCheck aria-hidden={true} focusable="false" />
      <span>Assignments</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      </li>
      </ul>
      {/* Footer Tabs */}
      <div className="mt-auto px-unit space-y-unit">
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span>Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area Wrapper */}
      <div className="flex-1 ml-[240px] flex flex-col h-screen overflow-hidden">
      {/* TopAppBar (Shared Component) */}
      <header className="bg-surface-container-lowest dark:bg-surface-container-low border-b border-outline-variant dark:border-outline docked full-width top-0 h-12 flex justify-between items-center px-container-padding z-10">
      {/* Left: Search (on_left) */}
      <div className="flex items-center w-64 relative">
      <Search className="absolute left-2 text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="w-full pl-8 pr-3 h-8 bg-surface dark:bg-inverse-surface border border-outline-variant dark:border-outline rounded-DEFAULT font-body-sm text-body-sm text-primary dark:text-inverse-primary focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors" placeholder="Search Records..." type="text" />
      </div>
      {/* Center/Logo spacing */}
      <div className="flex-1 flex justify-center invisible md:visible">
      {/* Logo is handled in sidebar for this layout, keeping space balanced */}
      </div>
      {/* Right: Actions */}
      <div className="flex items-center space-x-gutter">
      <button className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high px-3 h-8 rounded-DEFAULT transition-colors flex items-center" type="button" data-action-id="sync-1" onClick={actions?.["sync-1"]}>
                          Sync
                      </button>
      <button className="font-label-caps text-label-caps bg-primary text-on-primary px-4 h-8 rounded-DEFAULT hover:opacity-90 transition-opacity flex items-center shadow-sm" type="button" data-action-id="create-record-2" onClick={actions?.["create-record-2"]}>
                          Create Record
                      </button>
      <div className="flex items-center space-x-2 border-l border-outline-variant dark:border-outline pl-gutter ml-gutter">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high p-1 rounded-DEFAULT transition-colors flex items-center justify-center h-8 w-8" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high p-1 rounded-DEFAULT transition-colors flex items-center justify-center h-8 w-8" type="button" aria-label="Account Circle" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto bg-background p-container-padding pb-16 flex flex-col gap-container-padding relative">
      {/* Summary Metrics Bento Grid */}
      <section className="grid grid-cols-3 gap-gutter">
      {/* Metric 1 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex flex-col justify-between h-24">
      <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center justify-between">
      <span>Active Operators</span>
      <Users className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-display text-display text-primary">
                              42
                          </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex flex-col justify-between h-24">
      <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center justify-between">
      <span>Open Tasks</span>
      <ListChecks className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-display text-display text-primary">
                              128
                          </div>
      </div>
      {/* Metric 3 (Alert state) */}
      <div className="bg-error-container border border-error-container rounded-lg p-4 flex flex-col justify-between h-24">
      <div className="font-label-caps text-label-caps text-on-error-container flex items-center justify-between">
      <span>Priority Incidents</span>
      <TriangleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-display text-display text-on-error-container">
                              3
                          </div>
      </div>
      </section>
      {/* Data Table Section */}
      <section className="flex-1 flex gap-gutter min-h-0">
      {/* Main Table Area */}
      <div className="flex-1 bg-surface border border-outline-variant rounded-lg flex flex-col overflow-hidden">
      {/* Table Action Bar */}
      <div className="h-12 border-b border-outline-variant px-4 flex items-center justify-between bg-surface-container-lowest">
      <h2 className="font-headline-md text-headline-md text-primary">Operator Roster</h2>
      <div className="flex items-center gap-2">
      <button className="font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container px-2 py-1 rounded-DEFAULT transition-colors flex items-center gap-1 border border-outline-variant" type="button" data-action-id="filter-5" onClick={actions?.["filter-5"]}>
      <ListFilter className="text-[14px]" aria-hidden={true} focusable="false" /> Filter
                                  </button>
      <button className="font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container px-2 py-1 rounded-DEFAULT transition-colors flex items-center gap-1 border border-outline-variant" type="button" data-action-id="sort-6" onClick={actions?.["sort-6"]}>
      <ArrowUpDown className="text-[14px]" aria-hidden={true} focusable="false" /> Sort
                                  </button>
      </div>
      </div>
      {/* Table Content (Scrollable) */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
      <tr>
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant font-medium w-12">ID</th>
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant font-medium">Operator Name</th>
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant font-medium">Status</th>
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant font-medium">Last Activity</th>
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant font-medium">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-surface-variant">
      {/* Row 1 (Selected) */}
      <tr className="h-[32px] bg-surface-container-highest hover:bg-surface-container transition-colors cursor-pointer group">
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">OP-091</td>
      <td className="px-4 font-medium text-primary">Sarah Jenkins</td>
      <td className="px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-DEFAULT bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-[10px] font-bold uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span> Active
                                              </span>
      </td>
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">10:42:01 Z</td>
      <td className="px-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-secondary hover:underline font-label-caps text-label-caps" type="button" data-action-id="edit-7" onClick={actions?.["edit-7"]}>Edit</button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="h-[32px] hover:bg-surface-container transition-colors cursor-pointer group">
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">OP-092</td>
      <td className="px-4 font-medium text-primary">Marcus Vance</td>
      <td className="px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-DEFAULT bg-[#fef7e0] text-[#b06000] border border-[#fce8b2] text-[10px] font-bold uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-[#b06000]"></span> Standby
                                              </span>
      </td>
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">10:38:15 Z</td>
      <td className="px-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-secondary hover:underline font-label-caps text-label-caps" type="button" data-action-id="edit-8" onClick={actions?.["edit-8"]}>Edit</button>
      </td>
      </tr>
      {/* Row 3 (Error State) */}
      <tr className="h-[32px] hover:bg-surface-container transition-colors cursor-pointer group bg-error-container/10">
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">OP-088</td>
      <td className="px-4 font-medium text-primary">Elena Rodriguez</td>
      <td className="px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-DEFAULT bg-error-container text-on-error-container border border-error-container text-[10px] font-bold uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-[#93000a]"></span> Offline
                                              </span>
      </td>
      <td className="px-4 font-data-mono text-data-mono text-error flex items-center gap-1">
      <RefreshCwOff className="text-[14px]" aria-hidden={true} focusable="false" /> Sync Fail
                                          </td>
      <td className="px-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
      <button className="text-secondary hover:underline font-label-caps text-label-caps" type="button" data-action-id="edit-9" onClick={actions?.["edit-9"]}>Edit</button>
      <button className="text-on-surface-variant hover:text-primary font-label-caps text-label-caps flex items-center gap-1" type="button" data-action-id="retry-10" onClick={actions?.["retry-10"]}><RefreshCw className="text-[12px]" aria-hidden={true} focusable="false" /> Retry</button>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="h-[32px] hover:bg-surface-container transition-colors cursor-pointer group">
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">OP-104</td>
      <td className="px-4 font-medium text-primary">David Chen</td>
      <td className="px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-DEFAULT bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-[10px] font-bold uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span> Active
                                              </span>
      </td>
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">10:15:22 Z</td>
      <td className="px-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-secondary hover:underline font-label-caps text-label-caps" type="button" data-action-id="edit-11" onClick={actions?.["edit-11"]}>Edit</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Side Panel (Selected Item Preview) */}
      <aside className="w-80 bg-surface border border-outline-variant rounded-lg flex flex-col overflow-hidden">
      <div className="h-12 border-b border-outline-variant px-4 flex items-center justify-between bg-surface-container-low">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Inspector</span>
      <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" type="button" aria-label="Close" data-action-id="close-12" onClick={actions?.["close-12"]}>
      <X className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
      {/* Profile Header */}
      <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold border border-outline-variant overflow-hidden">
      <img alt="Profile Sarah Jenkins" className="w-full h-full object-cover" data-alt="Professional headshot of a female tech operator in a brightly lit modern office environment, wearing a dark blazer over a simple shirt. She has a focused but approachable expression. High key corporate photography style with a shallow depth of field blurring the background slightly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlAyrFxTLuur-ukLrK39B0nzHjg6BsZw5vGfe6_H0AzVlDuWYX6vuIR4Qdx-4c4xbTWTpSkYM05-w3_XRTO8uaT_nuRNAvpLns5awLjvwq6mbH-fCNJgI7BJkpW2Pp9JM23yx6I8Fq0xP9SAdYqpCMzO5JlYu4svKWdGB9KCu-l-SWR0DqVSuWyUV_wCx2jtzXIJa8j7Ix7lfo5AVQpxLcjtvisTQUKXMPX0XXw0f7Hh0YmA-rRzp9Ox-Y1avQ8jqiyQUHUXJxkOEx" />
      </div>
      <div>
      <h3 className="font-headline-md text-headline-md text-primary m-0">Sarah Jenkins</h3>
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px] mt-0.5">OP-091 • Tier 2</div>
      </div>
      </div>
      {/* Details Grid */}
      <div className="space-y-4">
      <div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Current Assignment</div>
      <div className="font-body-sm text-body-sm text-primary border border-outline-variant rounded-DEFAULT p-2 bg-background flex items-center gap-2">
      <Terminal className="text-[16px] text-secondary" aria-hidden={true} focusable="false" /> Server Cluster Alpha Maint.
                                      </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Shift Start</div>
      <div className="font-data-mono text-data-mono text-primary text-[12px]">08:00 Z</div>
      </div>
      <div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Uptime</div>
      <div className="font-data-mono text-data-mono text-primary text-[12px]">2h 42m</div>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Shift Handover Feed (Mini) */}
      <div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-3 flex justify-between items-center">
                                          Recent Logs
                                          <History className="text-[14px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="space-y-3 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-variant before:to-transparent">
      <div className="relative flex items-start space-x-3">
      <div className="w-3 h-3 rounded-full bg-secondary border-2 border-surface mt-1 z-10 relative"></div>
      <div className="flex-1">
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[10px] mb-0.5">10:42:01 Z</div>
      <div className="font-body-sm text-body-sm text-primary">Initiated diagnostics sequence on Node 3.</div>
      </div>
      </div>
      <div className="relative flex items-start space-x-3">
      <div className="w-3 h-3 rounded-full bg-surface-variant border-2 border-surface mt-1 z-10 relative"></div>
      <div className="flex-1">
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[10px] mb-0.5">09:15:44 Z</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Cleared low-priority alert queue.</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Panel Actions */}
      <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex gap-2">
      <button className="flex-1 font-label-caps text-label-caps border border-outline-variant text-primary px-3 h-8 rounded-DEFAULT hover:bg-surface-container transition-colors flex items-center justify-center" type="button" data-action-id="message-13" onClick={actions?.["message-13"]}>
                                  Message
                              </button>
      <button className="flex-1 font-label-caps text-label-caps bg-primary text-on-primary px-3 h-8 rounded-DEFAULT hover:opacity-90 transition-opacity flex items-center justify-center" type="button" data-action-id="assign-task-14" onClick={actions?.["assign-task-14"]}>
                                  Assign Task
                              </button>
      </div>
      </aside>
      </section>
      </main>
      {/* Footer (Shared Component) */}
      <footer className="bg-surface-container dark:bg-surface-container-low border-t border-outline-variant dark:border-outline fixed bottom-0 right-0 left-[240px] h-8 flex justify-between items-center px-4 z-10 opacity-90">
      <div className="font-data-mono text-data-mono text-on-surface-variant dark:text-on-surface-variant text-[11px]">
                      ShiftLedger v2.4.1 • Last Sync: 2m ago
                  </div>
      <div className="flex space-x-4">
      <a className="font-data-mono text-data-mono text-[11px] text-on-surface-variant dark:text-on-surface-variant hover:underline" href="#" data-action-id="system-status-7" onClick={actions?.["system-status-7"]}>System Status</a>
      <a className="font-data-mono text-data-mono text-[11px] text-on-surface-variant dark:text-on-surface-variant hover:underline" href="#" data-action-id="documentation-8" onClick={actions?.["documentation-8"]}>Documentation</a>
      </div>
      </footer>
      </div>
    </>
  );
}
