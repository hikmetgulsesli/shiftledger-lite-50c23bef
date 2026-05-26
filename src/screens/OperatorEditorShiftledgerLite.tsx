// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Operator Editor - ShiftLedger Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, ChevronDown, Pencil, Save } from "lucide-react";


export type OperatorEditorShiftledgerLiteActionId = "go-back-1" | "cancel-2" | "save-record-3";

export interface OperatorEditorShiftledgerLiteProps {
  actions?: Partial<Record<OperatorEditorShiftledgerLiteActionId, () => void>>;
}

export function OperatorEditorShiftledgerLite({ actions }: OperatorEditorShiftledgerLiteProps) {
  return (
    <>
      {/* Top Navigation Shell SUPPRESSED based on rules for Task-Focused/Linear/Transactional screen with Cancel/Back action */}
      {/* Main Content Canvas */}
      <main className="max-w-4xl mx-auto py-container-padding px-container-padding flex flex-col gap-stack-md h-screen">
      {/* Header / Context Area */}
      <header className="flex items-center justify-between pb-unit border-b border-outline-variant">
      <div className="flex items-center gap-stack-sm">
      <button aria-label="Go Back" className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded hover:bg-surface-container-high" type="button" data-action-id="go-back-1" onClick={actions?.["go-back-1"]}>
      <ArrowLeft className="text-xl" aria-hidden={true} focusable="false" />
      </button>
      <div>
      <h1 className="font-display text-display text-primary">Edit Operator Profile</h1>
      <p className="font-data-mono text-data-mono text-on-surface-variant mt-1">ID: OP-7492-X</p>
      </div>
      </div>
      {/* Unsaved Changes Indicator (Hidden by default, shown for spec) */}
      <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded border border-outline-variant">
      <Pencil className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface-variant">Unsaved changes</span>
      </div>
      </header>
      {/* Editor Form Canvas */}
      <div className="bg-surface border border-outline-variant rounded flex-1 overflow-hidden flex flex-col shadow-sm">
      {/* Editor Content Area (Scrollable) */}
      <div className="p-container-padding flex-1 overflow-y-auto">
      <form className="max-w-2xl mx-auto flex flex-col gap-stack-md">
      {/* Form Group: Operator Details */}
      <fieldset className="border border-outline-variant rounded p-gutter bg-surface-container-lowest">
      <legend className="font-label-caps text-label-caps text-on-surface-variant px-2 bg-surface-container-lowest border border-outline-variant rounded-sm ml-2">Core Identity</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-2">
      {/* Name Field */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface flex items-center gap-1" htmlFor="operator-name">
                                          Full Name <span aria-hidden={true} className="text-error">*</span>
      </label>
      <input className="h-row-height-compact border border-outline-variant rounded bg-surface px-2 font-body-base text-body-base focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" id="operator-name" name="operator-name" required={true} type="text" defaultValue="Jane Doe" />
      </div>
      {/* Role Field */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface flex items-center gap-1" htmlFor="operator-role">
                                          Primary Role <span aria-hidden={true} className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="h-row-height-compact w-full border border-outline-variant rounded bg-surface pl-2 pr-8 font-body-base text-body-base appearance-none focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" id="operator-role" name="operator-role" required={true}>
      <option value="lead">Shift Lead</option>
      <option selected={true} value="tech">Systems Technician</option>
      <option value="analyst">Data Analyst</option>
      <option value="support">L2 Support</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-sm" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </fieldset>
      {/* Form Group: Operational Assignment */}
      <fieldset className="border border-outline-variant rounded p-gutter bg-surface-container-lowest mt-4">
      <legend className="font-label-caps text-label-caps text-on-surface-variant px-2 bg-surface-container-lowest border border-outline-variant rounded-sm ml-2">Assignment Data</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-2">
      {/* Shift Field */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface flex items-center gap-1" htmlFor="operator-shift">
                                          Current Shift Cycle <span aria-hidden={true} className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="h-row-height-compact w-full border border-outline-variant rounded bg-surface pl-2 pr-8 font-body-base text-body-base appearance-none focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" id="operator-shift" name="operator-shift" required={true}>
      <option value="alpha">Alpha (06:00 - 14:00)</option>
      <option selected={true} value="beta">Beta (14:00 - 22:00)</option>
      <option value="gamma">Gamma (22:00 - 06:00)</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-sm" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Status Toggle */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface">Duty Status</label>
      <div className="flex items-center h-row-height-compact">
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
      <span className="ml-3 font-body-sm text-body-sm text-on-surface">Active Duty</span>
      </label>
      </div>
      </div>
      </div>
      </fieldset>
      {/* Form Group: Handoff Context */}
      <fieldset className="border border-outline-variant rounded p-gutter bg-surface-container-lowest mt-4 flex flex-col gap-2">
      <legend className="font-label-caps text-label-caps text-on-surface-variant px-2 bg-surface-container-lowest border border-outline-variant rounded-sm ml-2">Handoff Instructions</legend>
      <div className="flex flex-col gap-1 mt-2">
      <label className="font-label-caps text-label-caps text-on-surface" htmlFor="handoff-notes">Standing Notes</label>
      <textarea className="border border-outline-variant rounded bg-surface p-2 font-body-base text-body-base focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors resize-y" id="handoff-notes" name="handoff-notes" rows={4}>Requires daily sync with Alpha lead prior to rotation start. Pending clearance for Level 3 server access.</textarea>
      <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-right">0 / 500 characters</span>
      </div>
      </fieldset>
      </form>
      </div>
      {/* Fixed Bottom Action Bar */}
      <div className="h-16 bg-surface-container border-t border-outline-variant px-container-padding flex items-center justify-end gap-stack-md shrink-0">
      <button className="px-4 h-row-height-compact border border-outline font-label-caps text-label-caps text-on-surface rounded hover:bg-surface-variant transition-colors flex items-center justify-center" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>
                          Cancel
                      </button>
      <button className="px-6 h-row-height-compact bg-secondary font-label-caps text-label-caps text-on-secondary rounded hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 shadow-sm" type="submit" data-action-id="save-record-3" onClick={actions?.["save-record-3"]}>
      <Save className="text-sm" aria-hidden={true} focusable="false" />
                          Save Record
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
