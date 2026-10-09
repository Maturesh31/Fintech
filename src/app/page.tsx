import Link from "next/link";
import { ArrowRight, Check, Layers, ShieldCheck, X, Plug } from "lucide-react";
import { Logo } from "@/components/ui";
import { ExampleCard } from "@/components/ExampleCard";
import { STEPS } from "@/lib/steps";

const SETUP = [
  { icon: Plug, t: "Connect", d: "One Account Aggregator consent, or a CAS PDF upload. Read-only." },
  { icon: Layers, t: "Unify", d: "Every broker through NSDL and CDSL, merged into one list by ISIN." },
];

const COMPARE: [string, boolean, boolean, boolean][] = [
  ["All brokers in one view", true, true, false],
  ["After-tax, after-inflation value", true, false, false],
  ["After-tax check vs Nifty and REIT/InvIT index", true, false, false],
  ["Asset comparison by your tax slab", true, false, false],
  ["Risk-free twin portfolio", true, false, false],
  ["Neutral: no broking or product sales", true, true, false],
];

const Tick = ({ on }: { on: boolean }) =>
  on ? <Check size={18} className="mx-auto text-brand" aria-label="Yes" /> : <X size={18} className="mx-auto text-muted" aria-label="No" />;

export default function Landing() {
  return (
    <div>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Logo className="text-lg" />
        <nav className="flex items-center gap-3 text-sm" aria-label="Site">
          <a href="#how" className="hidden text-muted hover:text-ink sm:block">How it works</a>
          <a href="#compare" className="hidden text-muted hover:text-ink sm:block">Compare</a>
          <Link href="/dashboard" className="rounded-full bg-brand px-4 py-2 font-medium text-on-brand">Live demo</Link>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong">
              FinTech · All your investments, in one place
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
              See what your money is <span className="text-brand">really</span> worth.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Apps show what your investments are worth. TrackFolio shows what they are worth <em>to you</em>: every stock, REIT, InvIT and bond from every broker, after tax, costs and inflation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/connect" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-on-brand shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5">
                Connect and see yours <ArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/dashboard" className="inline-flex items-center rounded-full border border-line bg-surface px-6 py-3 font-medium hover:bg-surface-2">
                Skip to demo investor
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
              {[["1 consent", "every demat account"], ["< 2 min", "to your real value"], ["3 views", "stocks, REITs, bonds"]].map(([a, b]) => (
                <div key={a}>
                  <dt className="num text-xl font-semibold">{a}</dt>
                  <dd className="text-muted">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ExampleCard />
        </section>

        <section className="border-y border-line bg-surface py-16" aria-labelledby="problem">
          <div className="mx-auto max-w-6xl px-5">
            <h2 id="problem" className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Investors decide on numbers that look better than they are</h2>
            <dl className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["23.16 Cr", "demat accounts but only ~13.1 Cr unique investors. Many people hold more than one account."],
                ["< 1%", "of investors hold REITs or InvITs, so steady-income assets go unused."],
                ["₹3.81L → ₹1.64L", "gain an app shows vs real gain after tax and 5% inflation, on ₹5L over 5 years."],
              ].map(([n, d]) => (
                <div key={n} className="rounded-2xl bg-amber-soft p-6 ring-1 ring-amber/15">
                  <dt className="num text-3xl font-semibold text-amber">{n}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-ink/80">{d}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted">Sources: CDSL/NSDL and NSE data, Indian REITs Association, Bharat InvITs Association (2026). Illustrative: 12%/yr growth, LTCG 12.5% above ₹1.25L + cess.</p>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-20" aria-labelledby="how-h">
          <h2 id="how-h" className="text-3xl font-semibold tracking-tight md:text-4xl">How it works, step by step</h2>
          <p className="mt-3 max-w-2xl text-muted">Two quick setup steps, then six screens that walk you from your real value to a better plan.</p>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted">Set up · about 2 minutes</h3>
          <ol className="mt-4 grid gap-4 sm:grid-cols-2">
            {SETUP.map(({ icon: Icon, t, d }, i) => (
              <li key={t} className="card flex gap-4 p-5">
                <span className="num flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-bg">{String.fromCharCode(65 + i)}</span>
                <div>
                  <h4 className="flex items-center gap-2 font-semibold"><Icon size={18} className="text-brand" aria-hidden /> {t}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-muted">Then explore, in this order</h3>
          <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(({ href, label, blurb, icon: Icon }, i) => (
              <li key={href}>
                <Link href={href} className="card group flex h-full flex-col p-5 transition-colors hover:border-brand">
                  <div className="flex items-center justify-between">
                    <span className="num flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-on-brand">{i + 1}</span>
                    <Icon size={22} className="text-brand" aria-hidden />
                  </div>
                  <h4 className="mt-4 font-semibold">{label}</h4>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Open step {i + 1} <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <ShieldCheck size={16} className="text-brand" aria-hidden /> Neutral by design: no broking, no products to sell. Read-only access, encrypted, deleted on request.
          </p>
        </section>

        <section id="compare" className="mx-auto max-w-4xl scroll-mt-8 px-5 pb-20" aria-labelledby="cmp">
          <h2 id="cmp" className="text-3xl font-semibold tracking-tight md:text-4xl">How we compare</h2>
          <div className="card mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-line text-left text-xs text-muted">
                  <th scope="col" className="p-4 font-medium">Capability</th>
                  <th scope="col" className="p-4 text-center font-semibold text-brand">TrackFolio</th>
                  <th scope="col" className="p-4 text-center font-medium">INDmoney</th>
                  <th scope="col" className="p-4 text-center font-medium">Broker apps</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, a, b, c]) => (
                  <tr key={k} className="border-b border-line/60 last:border-0">
                    <th scope="row" className="p-4 text-left font-medium">{k}</th>
                    <td className="p-4"><Tick on={a} /></td>
                    <td className="p-4"><Tick on={b} /></td>
                    <td className="p-4"><Tick on={c} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">Based on publicly listed features, Oct 2026.</p>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="rounded-3xl bg-brand px-6 py-14 text-center text-on-brand md:px-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Others show what your money is worth. We show what it is really worth to you.</h2>
            <Link href="/connect" className="mt-8 inline-flex items-center gap-2 rounded-full bg-surface px-7 py-3 font-medium text-brand-strong">
              Try the live demo <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted">
          <Logo />
          <p>Built by Team <span className="font-medium text-ink">Innovisionaries</span> · Domain 2, FinTech · PS 2</p>
          <p className="w-full text-xs">Education only, not investment advice. Demo uses sample data from a sandbox consent.</p>
        </div>
      </footer>
    </div>
  );
}
