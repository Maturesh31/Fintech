import { BarChart3, Building2, GitCompare, LayoutDashboard, MessageCircle, Percent } from "lucide-react";

/** The dashboard journey, in the order a user should walk through it. Used by nav, page headers and "next step" links. */
export const STEPS = [
  { href: "/dashboard", label: "Real value", short: "Value", icon: LayoutDashboard, blurb: "What your portfolio is worth after tax, costs and inflation." },
  { href: "/dashboard/benchmarks", label: "Benchmarks", short: "Bench", icon: BarChart3, blurb: "Each holding against Nifty 50, REIT/InvIT and G-Sec indices, after tax." },
  { href: "/dashboard/slab", label: "Your tax slab", short: "Slab", icon: Percent, blurb: "Which assets keep the most money at your tax slab." },
  { href: "/dashboard/own", label: "What you own", short: "Own", icon: Building2, blurb: "Your REIT and InvIT units as real offices, roads and power lines." },
  { href: "/dashboard/twin", label: "Portfolio Twin", short: "Twin", icon: GitCompare, blurb: "A risk-free copy with some income assets, tracked beside you." },
  { href: "/dashboard/ask", label: "Ask", short: "Ask", icon: MessageCircle, blurb: "Plain answers about your numbers in English, Hindi and Marathi." },
] as const;

export function stepIndex(path: string) {
  return STEPS.findIndex((s) => (s.href === "/dashboard" ? path === s.href : path.startsWith(s.href)));
}
