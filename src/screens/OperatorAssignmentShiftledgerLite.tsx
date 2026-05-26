// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Operator Assignment - ShiftLedger Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, Bell, Bolt, ChevronDown, ChevronRight, CircleHelp, CircleUserRound, ClipboardCheck, EllipsisVertical, Factory, History, LayoutDashboard, ListFilter, RefreshCw, Search, Settings } from "lucide-react";


export type OperatorAssignmentShiftledgerLiteActionId = "create-record-1" | "sync-2" | "notifications-3" | "account-circle-4" | "bulk-assign-5" | "more-vert-6" | "more-vert-7" | "more-vert-8" | "more-vert-9" | "execute-assignment-10" | "history-11" | "operations-1" | "status-board-2" | "assignments-3" | "insights-4" | "settings-5" | "support-6" | "system-status-7" | "documentation-8";

export interface OperatorAssignmentShiftledgerLiteProps {
  actions?: Partial<Record<OperatorAssignmentShiftledgerLiteActionId, () => void>>;
}

export function OperatorAssignmentShiftledgerLite({ actions }: OperatorAssignmentShiftledgerLiteProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container-lowest dark:bg-surface-container-low text-primary dark:text-inverse-primary font-label-caps text-label-caps docked full-width top-0 h-12 border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center ml-0 md:ml-[240px] px-container-padding fixed w-full md:w-[calc(100%-240px)] z-50">
      <div className="flex items-center gap-4">
      <span className="font-headline-md text-headline-md font-black text-primary dark:text-on-primary-fixed md:hidden">ShiftLedger Lite</span>
      <div className="hidden md:flex items-center gap-2 bg-surface-container rounded px-3 py-1.5 h-8">
      <Search className="text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none focus:ring-0 text-body-sm font-body-sm text-on-surface p-0 w-64 placeholder-on-surface-variant" placeholder="Search operators or assignments..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button className="bg-primary text-on-primary hover:bg-surface-tint rounded px-4 h-8 flex items-center justify-center transition-colors font-label-caps text-label-caps uppercase tracking-wider" type="button" data-action-id="create-record-1" onClick={actions?.["create-record-1"]}>
                      Create Record
                  </button>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1" type="button" data-action-id="sync-2" onClick={actions?.["sync-2"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="hidden sm:inline">Sync</span>
      </button>
      <div className="flex items-center gap-2 border-l border-outline-variant pl-4 ml-2">
      <button className="text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="Account Circle" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex bg-surface dark:bg-inverse-surface text-secondary dark:text-secondary-fixed font-body-base text-body-base w-[240px] h-screen fixed left-0 top-0 border-r border-outline-variant dark:border-outline flat no shadows flex-col py-4 z-40">
      <div className="px-6 mb-8 mt-2">
      <div className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-background">ShiftLedger Lite</div>
      <div className="text-body-sm font-body-sm text-on-surface-variant mt-1">Operational Handoff</div>
      </div>
      <div className="flex-1 flex flex-col gap-1 px-3">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Factory aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="status-board-2" onClick={actions?.["status-board-2"]}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
                      Status Board
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-secondary dark:text-secondary-fixed-dim font-bold border-r-2 border-secondary bg-surface-container-low" href="#" data-action-id="assignments-3" onClick={actions?.["assignments-3"]}>
      <ClipboardCheck aria-hidden={true} focusable="false" />
                      Assignments
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      <div className="mt-auto px-3 flex flex-col gap-1 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
                      Support
                  </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="md:ml-[240px] pt-12 pb-8 min-h-screen flex flex-col">
      <div className="p-container-padding flex-1 flex flex-col gap-gutter max-w-[1440px] mx-auto w-full">
      {/* Page Header & Metrics Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
      <div>
      <h1 className="font-display text-display text-on-surface mb-1">Operator Assignment</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Active roster and current workload distribution.</p>
      </div>
      <div className="flex gap-4 w-full md:w-auto">
      {/* Metric Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 min-w-[120px] flex-1 md:flex-none">
      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Total Operators</div>
      <div className="font-display text-display text-on-surface">24</div>
      </div>
      {/* Metric Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 min-w-[120px] flex-1 md:flex-none relative overflow-hidden">
      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Unassigned</div>
      <div className="font-display text-display text-error">3</div>
      <div className="absolute top-0 right-0 w-1 h-full bg-error"></div>
      </div>
      {/* Metric Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 min-w-[120px] flex-1 md:flex-none">
      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Overloaded</div>
      <div className="font-display text-display text-on-surface">1</div>
      </div>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
      {/* Main Assignment Grid (Spans 2 columns on lg) */}
      <div className="lg:col-span-2 flex flex-col gap-4">
      {/* Action Bar */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded h-12 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
      <ListFilter className="text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Filter</span>
      </div>
      <div className="h-4 w-px bg-outline-variant"></div>
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-error block"></span>
      <span className="font-body-sm text-body-sm text-on-surface">Needs Attention</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="font-label-caps text-label-caps text-secondary hover:text-surface-tint uppercase transition-colors" type="button" data-action-id="bulk-assign-5" onClick={actions?.["bulk-assign-5"]}>Bulk Assign</button>
      </div>
      </div>
      {/* Data Table Container */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden flex-1">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant bg-surface-container-low h-row-height-compact">
      <th className="px-4 font-label-caps text-label-caps text-on-surface-variant uppercase font-bold w-1/4">Operator</th>
      <th className="px-4 font-label-caps text-label-caps text-on-surface-variant uppercase font-bold w-1/4">Status</th>
      <th className="px-4 font-label-caps text-label-caps text-on-surface-variant uppercase font-bold w-1/4">Current Load</th>
      <th className="px-4 font-label-caps text-label-caps text-on-surface-variant uppercase font-bold w-1/4">Zone/Station</th>
      <th className="px-4 w-10"></th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm">
      {/* Row 1 - Missing Assignment */}
      <tr className="border-b border-outline-variant h-row-height-standard data-table-row group cursor-pointer bg-error-container/20">
      <td className="px-4 font-medium text-on-surface flex items-center gap-2 h-row-height-standard">
      <div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center font-data-mono text-[10px] text-on-surface-variant">JD</div>
                                              John Doe
                                          </td>
      <td className="px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-caps text-label-caps uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Unassigned
                                              </span>
      </td>
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">0 / 4 tasks</td>
      <td className="px-4 text-on-surface-variant">--</td>
      <td className="px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="More Vert" data-action-id="more-vert-6" onClick={actions?.["more-vert-6"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 2 - Normal */}
      <tr className="border-b border-outline-variant h-row-height-standard data-table-row group cursor-pointer">
      <td className="px-4 font-medium text-on-surface flex items-center gap-2 h-row-height-standard">
      <div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center font-data-mono text-[10px] text-on-surface-variant">AS</div>
                                              Alice Smith
                                          </td>
      <td className="px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-caps text-label-caps uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Active
                                              </span>
      </td>
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">3 / 4 tasks</td>
      <td className="px-4 text-on-surface-variant">Zone Alpha - Bay 4</td>
      <td className="px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="More Vert" data-action-id="more-vert-7" onClick={actions?.["more-vert-7"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 3 - Overloaded */}
      <tr className="border-b border-outline-variant h-row-height-standard data-table-row group cursor-pointer">
      <td className="px-4 font-medium text-on-surface flex items-center gap-2 h-row-height-standard">
      <div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center font-data-mono text-[10px] text-on-surface-variant">RJ</div>
                                              Robert Jones
                                          </td>
      <td className="px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-container font-label-caps text-label-caps uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> Overload
                                              </span>
      </td>
      <td className="px-4 font-data-mono text-data-mono text-error">5 / 4 tasks</td>
      <td className="px-4 text-on-surface-variant">Zone Bravo - Bay 1</td>
      <td className="px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="More Vert" data-action-id="more-vert-8" onClick={actions?.["more-vert-8"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 4 - Normal */}
      <tr className="border-b border-outline-variant h-row-height-standard data-table-row group cursor-pointer">
      <td className="px-4 font-medium text-on-surface flex items-center gap-2 h-row-height-standard">
      <div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center font-data-mono text-[10px] text-on-surface-variant">EW</div>
                                              Emily Wong
                                          </td>
      <td className="px-4">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-caps text-label-caps uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Active
                                              </span>
      </td>
      <td className="px-4 font-data-mono text-data-mono text-on-surface-variant">2 / 4 tasks</td>
      <td className="px-4 text-on-surface-variant">Zone Charlie - Control</td>
      <td className="px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="More Vert" data-action-id="more-vert-9" onClick={actions?.["more-vert-9"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Right Column: Context & Feed */}
      <div className="flex flex-col gap-6">
      {/* Quick Assign Panel (Glassmorphism inspired but subtle for corporate) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2">
      <Bolt className="text-secondary" aria-hidden={true} focusable="false" />
                                  Quick Reassign
                              </h3>
      <div className="space-y-4">
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Target Operator</label>
      <div className="relative">
      <select className="w-full h-row-height-compact bg-surface-container border border-outline-variant rounded px-3 font-body-sm text-body-sm text-on-surface appearance-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors">
      <option>Select Operator...</option>
      <option>John Doe (Available)</option>
      <option>Emily Wong (Light Load)</option>
      </select>
      <ChevronDown className="absolute right-2 top-1.5 text-on-surface-variant pointer-events-none text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Pending Task</label>
      <div className="bg-surface-container border border-outline-variant rounded p-2 font-body-sm text-body-sm text-on-surface flex justify-between items-center cursor-pointer hover:bg-surface-variant transition-colors">
      <span>TSK-9921: Bay 4 Audit</span>
      <ChevronRight className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <button className="w-full bg-secondary text-on-secondary hover:bg-surface-tint rounded h-row-height-compact font-label-caps text-label-caps uppercase tracking-wider transition-colors mt-2" type="button" data-action-id="execute-assignment-10" onClick={actions?.["execute-assignment-10"]}>
                                      Execute Assignment
                                  </button>
      </div>
      </div>
      {/* Recent Activity Feed */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded flex-1 flex flex-col overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h3 className="font-headline-md text-headline-md text-on-surface text-[14px]">Assignment Feed</h3>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="History" data-action-id="history-11" onClick={actions?.["history-11"]}>
      <History className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
      <div className="relative pl-4 space-y-6 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-outline-variant">
      {/* Feed Item 1 */}
      <div className="relative">
      <div className="absolute -left-[11px] top-1 w-[7px] h-[7px] rounded-full bg-secondary border-2 border-surface-container-lowest"></div>
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px] mb-1">10:42 AM</div>
      <div className="font-body-sm text-body-sm text-on-surface">
      <span className="font-medium">Emily Wong</span> assigned to <span className="font-data-mono bg-surface-container px-1 rounded text-[11px]">TSK-9920</span> by Auto-Router.
                                          </div>
      </div>
      {/* Feed Item 2 */}
      <div className="relative">
      <div className="absolute -left-[11px] top-1 w-[7px] h-[7px] rounded-full bg-error border-2 border-surface-container-lowest"></div>
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px] mb-1">10:15 AM</div>
      <div className="font-body-sm text-body-sm text-on-surface">
      <span className="font-medium text-error">Alert:</span> John Doe assignment removed. Station offline.
                                          </div>
      </div>
      {/* Feed Item 3 */}
      <div className="relative">
      <div className="absolute -left-[11px] top-1 w-[7px] h-[7px] rounded-full bg-outline border-2 border-surface-container-lowest"></div>
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px] mb-1">09:00 AM</div>
      <div className="font-body-sm text-body-sm text-on-surface">
                                              Shift handover completed. 24 operators synced.
                                          </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container dark:bg-surface-container-low text-on-surface-variant dark:text-on-surface-variant font-data-mono text-data-mono fixed bottom-0 right-0 md:left-[240px] left-0 h-8 border-t border-outline-variant dark:border-outline flat no shadows flex justify-between items-center px-4 z-40 opacity-90">
      <div>ShiftLedger v2.4.1 • Last Sync: 2m ago</div>
      <div className="flex gap-4">
      <a className="hover:underline" href="#" data-action-id="system-status-7" onClick={actions?.["system-status-7"]}>System Status</a>
      <a className="hover:underline" href="#" data-action-id="documentation-8" onClick={actions?.["documentation-8"]}>Documentation</a>
      </div>
      </footer>
    </>
  );
}
