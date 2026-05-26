// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - ShiftLedger Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, Bell, BellRing, CheckCircle2, CircleHelp, CircleUserRound, ClipboardCheck, Eye, Factory, LayoutDashboard, ListFilter, RefreshCw, RotateCcw, Search, Server, Settings } from "lucide-react";


export type SettingsAndPreferencesShiftledgerLiteActionId = "sync-1" | "create-record-2" | "notifications-3" | "account-circle-4" | "edit-5" | "edit-6" | "reset-to-defaults-7" | "reset-controls-8" | "save-changes-9" | "operations-1" | "status-board-2" | "assignments-3" | "insights-4" | "settings-5" | "support-6" | "system-status-7" | "documentation-8";

export interface SettingsAndPreferencesShiftledgerLiteProps {
  actions?: Partial<Record<SettingsAndPreferencesShiftledgerLiteActionId, () => void>>;
}

export function SettingsAndPreferencesShiftledgerLite({ actions }: SettingsAndPreferencesShiftledgerLiteProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-4 w-[240px] h-screen fixed left-0 top-0 bg-surface border-r border-outline-variant z-20">
      <div className="px-6 mb-8">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">ShiftLedger Lite</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Operational Handoff</p>
      </div>
      <ul className="flex-1 space-y-1">
      <li>
      <a className="flex items-center px-6 py-2 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Factory className="mr-4" aria-hidden={true} focusable="false" />
                          Operations
                      </a>
      </li>
      <li>
      <a className="flex items-center px-6 py-2 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="status-board-2" onClick={actions?.["status-board-2"]}>
      <LayoutDashboard className="mr-4" aria-hidden={true} focusable="false" />
                          Status Board
                      </a>
      </li>
      <li>
      <a className="flex items-center px-6 py-2 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="assignments-3" onClick={actions?.["assignments-3"]}>
      <ClipboardCheck className="mr-4" aria-hidden={true} focusable="false" />
                          Assignments
                      </a>
      </li>
      <li>
      <a className="flex items-center px-6 py-2 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 className="mr-4" aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </li>
      </ul>
      <ul className="mt-auto space-y-1 pt-4 border-t border-outline-variant mx-4">
      <li>
      <a className="flex items-center px-2 py-2 text-secondary font-bold border-r-2 border-secondary opacity-80 duration-150" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="mr-4" aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      </li>
      <li>
      <a className="flex items-center px-2 py-2 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <CircleHelp className="mr-4" aria-hidden={true} focusable="false" />
                          Support
                      </a>
      </li>
      </ul>
      </nav>
      {/* TopAppBar */}
      <header className="flex justify-between items-center ml-[240px] px-container-padding docked full-width top-0 h-12 bg-surface-container-lowest border-b border-outline-variant z-10 sticky">
      <div className="flex items-center">
      {/* Search would go here based on 'search_bar': 'on_left' */}
      <div className="relative w-64 mr-4">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-[32px] pl-8 pr-3 bg-surface-container border border-outline-variant rounded-DEFAULT text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none placeholder-on-surface-variant" placeholder="Search..." type="text" />
      </div>
      </div>
      <div className="flex items-center space-x-4">
      <button className="font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container transition-colors p-2 rounded-DEFAULT flex items-center" type="button" data-action-id="sync-1" onClick={actions?.["sync-1"]}>
      <RefreshCw className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="sr-only">Sync</span>
      </button>
      <button className="bg-secondary text-on-secondary px-3 py-1 rounded-DEFAULT font-label-caps text-label-caps hover:bg-on-secondary-fixed-variant transition-colors flex items-center h-[32px]" type="button" data-action-id="create-record-2" onClick={actions?.["create-record-2"]}>
                      Create Record
                  </button>
      <div className="flex space-x-2 border-l border-outline-variant pl-4">
      <button className="text-on-surface-variant hover:bg-surface-container p-1 rounded-DEFAULT transition-colors" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container p-1 rounded-DEFAULT transition-colors" type="button" aria-label="Account Circle" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Content */}
      <main className="ml-0 md:ml-[240px] p-container-padding mb-12">
      <div className="max-w-4xl mx-auto space-y-gutter">
      <div className="mb-6 flex justify-between items-end">
      <div>
      <h2 className="font-display text-display text-on-surface">Settings &amp; Preferences</h2>
      <p className="font-body-base text-body-base text-on-surface-variant mt-1">Manage your view configurations and operational alerts.</p>
      </div>
      <div className="hidden bg-secondary-container text-on-secondary-container px-4 py-2 rounded-DEFAULT font-body-sm flex items-center shadow-sm" id="save-toast">
      <CheckCircle2 className="mr-2 text-[18px]" aria-hidden={true} focusable="false" />
                          Preferences saved
                      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Left Column */}
      <div className="lg:col-span-8 space-y-gutter">
      {/* View Preferences Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-6">
      <div className="flex items-center mb-4 pb-2 border-b border-outline-variant">
      <Eye className="mr-2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-on-surface">View Preferences</h3>
      </div>
      <div className="space-y-6">
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Default View</label>
      <select className="w-full h-10 px-3 bg-surface border border-outline-variant rounded-DEFAULT text-body-base focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none">
      <option>Status Board</option>
      <option>Operations</option>
      <option>Insights</option>
      </select>
      </div>
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Interface Density</label>
      <div className="flex space-x-4">
      <label className="flex items-center space-x-2 cursor-pointer">
      <input defaultChecked={true} className="text-secondary focus:ring-secondary h-4 w-4 border-outline-variant" name="density" type="radio" />
      <span className="font-body-base text-body-base text-on-surface">Compact (32px rows)</span>
      </label>
      <label className="flex items-center space-x-2 cursor-pointer">
      <input className="text-secondary focus:ring-secondary h-4 w-4 border-outline-variant" name="density" type="radio" />
      <span className="font-body-base text-body-base text-on-surface">Standard (44px rows)</span>
      </label>
      </div>
      </div>
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Theme Override</label>
      <select className="w-full md:w-1/2 h-10 px-3 bg-surface border border-outline-variant rounded-DEFAULT text-body-base focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none">
      <option>System Default (Light)</option>
      <option>Force Light Mode</option>
      <option>Force Dark Mode</option>
      </select>
      </div>
      </div>
      </div>
      {/* Saved Filters & Automation Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-6">
      <div className="flex items-center mb-4 pb-2 border-b border-outline-variant">
      <ListFilter className="mr-2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-on-surface">Saved Filters &amp; Automation</h3>
      </div>
      <div className="mb-6">
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Active Filter Sets</label>
      <div className="border border-outline-variant rounded-DEFAULT overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant">
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant">Name</th>
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant">Target Board</th>
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant w-16">Default</th>
      <th className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant w-24">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm">
      <tr className="border-b border-outline-variant hover:bg-surface-container-lowest">
      <td className="px-4 py-row-height-compact text-on-surface font-medium">Critical Incidents Only</td>
      <td className="px-4 py-row-height-compact text-on-surface-variant">Status Board</td>
      <td className="px-4 py-row-height-compact text-center">
      <input defaultChecked={true} className="text-secondary focus:ring-secondary h-4 w-4 border-outline-variant" name="default_filter" type="radio" />
      </td>
      <td className="px-4 py-row-height-compact">
      <button className="text-secondary hover:underline mr-2" type="button" data-action-id="edit-5" onClick={actions?.["edit-5"]}>Edit</button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-lowest">
      <td className="px-4 py-row-height-compact text-on-surface font-medium">Team Alpha Active</td>
      <td className="px-4 py-row-height-compact text-on-surface-variant">Operations</td>
      <td className="px-4 py-row-height-compact text-center">
      <input className="text-secondary focus:ring-secondary h-4 w-4 border-outline-variant" name="default_filter" type="radio" />
      </td>
      <td className="px-4 py-row-height-compact">
      <button className="text-secondary hover:underline mr-2" type="button" data-action-id="edit-6" onClick={actions?.["edit-6"]}>Edit</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Status Board Auto-Refresh</label>
      <select className="w-full md:w-1/2 h-10 px-3 bg-surface border border-outline-variant rounded-DEFAULT text-body-base focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none">
      <option>Every 30 seconds</option>
      <option selected={true}>Every 1 minute</option>
      <option>Every 5 minutes</option>
      <option>Manual only</option>
      </select>
      </div>
      </div>
      </div>
      {/* Right Column */}
      <div className="lg:col-span-4 space-y-gutter">
      {/* Notification Settings */}
      <div className="bg-surface border border-outline-variant rounded-lg p-6">
      <div className="flex items-center mb-4 pb-2 border-b border-outline-variant">
      <BellRing className="mr-2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-on-surface">Notifications</h3>
      </div>
      <div className="space-y-4">
      <div className="flex items-center justify-between">
      <div>
      <div className="font-body-base text-body-base text-on-surface font-medium">Priority Alerts</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">P1/P2 incidents</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-surface-variant border border-outline-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
      </label>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <div className="font-body-base text-body-base text-on-surface font-medium">Handoff Reminders</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">15m before shift end</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-surface-variant border border-outline-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
      </label>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <div className="font-body-base text-body-base text-on-surface font-medium">Assignment Updates</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Changes to your tasks</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-surface-variant border border-outline-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
      </label>
      </div>
      <hr className="border-outline-variant my-4" />
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Alert Sound</label>
      <select className="w-full h-8 px-2 bg-surface border border-outline-variant rounded-DEFAULT text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none">
      <option>Standard Chime</option>
      <option>Subtle Beep</option>
      <option>None</option>
      </select>
      </div>
      </div>
      </div>
      {/* System & Reset */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-6">
      <div className="flex items-center mb-4 pb-2 border-b border-outline-variant">
      <Server className="mr-2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-on-surface">System</h3>
      </div>
      <div className="space-y-4">
      <div className="font-data-mono text-data-mono text-on-surface-variant mb-4">
                                      ShiftLedger Lite v2.4.1<br />
                                      Build: 88f2a1c
                                  </div>
      <button className="w-full bg-surface text-error border border-error hover:bg-error-container px-4 py-2 rounded-DEFAULT font-label-caps text-label-caps transition-colors flex justify-center items-center" type="button" data-action-id="reset-to-defaults-7" onClick={actions?.["reset-to-defaults-7"]}>
      <RotateCcw className="mr-2 text-[16px]" aria-hidden={true} focusable="false" />
                                      Reset to Defaults
                                  </button>
      </div>
      </div>
      </div>
      </div>
      {/* Action Bar */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-outline-variant mt-8">
      <button className="px-6 py-2 rounded-DEFAULT font-label-caps text-label-caps border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors" type="button" data-action-id="reset-controls-8" onClick={actions?.["reset-controls-8"]}>
                          Reset Controls
                      </button>
      <button className="px-6 py-2 rounded-DEFAULT font-label-caps text-label-caps bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors shadow-sm" type="button" data-action-id="save-changes-9" onClick={actions?.["save-changes-9"]}>
                          Save Changes
                      </button>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="flex justify-between items-center px-4 fixed bottom-0 right-0 left-0 md:left-[240px] h-8 bg-surface-container border-t border-outline-variant z-10">
      <span className="font-data-mono text-data-mono text-on-surface-variant">ShiftLedger v2.4.1 • Last Sync: 2m ago</span>
      <div className="space-x-4">
      <a className="font-label-caps text-label-caps font-bold text-on-surface-variant hover:underline" href="#" data-action-id="system-status-7" onClick={actions?.["system-status-7"]}>System Status</a>
      <a className="font-label-caps text-label-caps font-bold text-on-surface-variant hover:underline" href="#" data-action-id="documentation-8" onClick={actions?.["documentation-8"]}>Documentation</a>
      </div>
      </footer>
    </>
  );
}
