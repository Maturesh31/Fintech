"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Check, Sparkles } from "lucide-react";
import { Logo, StepNav } from "@/components/ui";
import { useSettings } from "@/lib/settings";
import { STEPS, stepIndex } from "@/lib/steps";

const SLABS = [0, 5, 10, 15, 20, 30];

function Controls() {
  const { slab, setSlab, inflation, setInflation } = useSettings();
  return (
    <div className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 md:w-auto">
      <div className="flex w-full items-center gap-2 md:w-auto">
        <span id="slab-label" className="text-xs font-semibold text-ink">Your tax slab</span>
        <div role="radiogroup" aria-labelledby="slab-label" className="flex flex-1 rounded-lg bg-surface-2 p-0.5 md:flex-none">
          {SLABS.map((s) => (
            <button
              key={s}
              role="radio"
              aria-checked={slab === s}
              onClick={() => setSlab(s)}
              className={clsx(
                "num flex-1 rounded-md px-2 py-1 text-xs font-medium transition-colors md:flex-none md:px-2.5",
                slab === s ? "bg-brand text-on-brand shadow-sm" : "text-muted hover:text-ink",
              )}
            >
              {s}%
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-center gap-2 text-xs font-semibold text-ink">
        Inflation
        <input
          type="range"
          min={2}
          max={9}
          step={0.5}
          value={inflation}
          onChange={(e) => setInflation(Number(e.target.value))}
          className="w-28 accent-[var(--brand)]"
          aria-label="Yearly inflation"
        />
        <span className="num w-10 rounded-md bg-surface-2 px-1.5 py-0.5 text-center text-ink">{inflation}%</span>
      </label>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const current = stepIndex(path);
  return (
    <div className="min-h-screen md:grid md:grid-cols-[256px_1fr]">
      <aside className="hidden border-r border-line bg-surface md:block">
        <div className="sticky top-0 flex h-screen flex-col p-5">
          <Logo className="text-lg" />
          <p className="mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-muted">Your journey</p>
          <nav className="mt-2" aria-label="Main">
            <ol className="space-y-1">
              {STEPS.map(({ href, label, icon: Icon }, i) => {
                const active = i === current;
                const done = current > i;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                        active ? "bg-brand-soft text-brand-strong" : "text-ink/80 hover:bg-surface-2 hover:text-ink",
                      )}
                    >
                      <span
                        className={clsx(
                          "num flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                          active ? "bg-brand text-on-brand" : done ? "bg-brand-soft text-brand-strong" : "bg-surface-2 text-muted",
                        )}
                        aria-hidden
                      >
                        {done ? <Check size={13} /> : i + 1}
                      </span>
                      <span className="flex-1">{label}</span>
                      <Icon size={16} className={active ? "text-brand" : "text-muted"} aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>
          <div className="mt-auto rounded-xl bg-surface-2 p-4 text-xs text-muted">
            <div className="mb-1 flex items-center gap-1.5 font-medium text-ink">
              <Sparkles size={14} aria-hidden /> Demo investor
            </div>
            Priya Sharma, Pune. 3 brokers linked through a sandbox consent.
            <div className="mt-3 border-t border-line pt-3">Built by Team Innovisionaries</div>
          </div>
        </div>
      </aside>

      <div className="min-w-0 overflow-x-clip pb-24 md:pb-10">
        <div className="sticky top-0 z-20 border-b border-line bg-surface/95 px-4 py-3 backdrop-blur md:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
            <div className="md:hidden">
              <Logo />
            </div>
            <Controls />
          </div>
        </div>
        <main className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
          {children}
          <StepNav />
        </main>
      </div>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-line bg-surface md:hidden"
        aria-label="Main mobile"
      >
        {STEPS.map(({ href, label, short, icon: Icon }, i) => {
          const active = i === current;
          return (
            <Link
              key={href}
              href={href}
              aria-label={`Step ${i + 1}: ${label}`}
              aria-current={active ? "page" : undefined}
              className={clsx("flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium", active ? "text-brand" : "text-muted")}
            >
              <Icon size={20} aria-hidden />
              {i + 1}. {short}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
