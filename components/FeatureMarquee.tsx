import { BadgeDollarSign, Clock3, Rocket } from 'lucide-react'

const features = [
  { label: 'Fast Delivery', Icon: Rocket },
  { label: '24/7 Chat Support', Icon: Clock3 },
  { label: 'Reasonable Prices', Icon: BadgeDollarSign },
  { label: 'High Quality Design', Icon: Rocket },
  { label: 'Secure & Reliable', Icon: Clock3 },
  { label: 'Custom Solutions', Icon: BadgeDollarSign },
  { label: 'Fast Response Time', Icon: Clock3 },
]

function MarqueeItems() {
  return (
    <ul className="flex min-w-max items-center gap-10 px-6 sm:gap-12 sm:px-12 lg:gap-14" aria-label="Service highlights">
      {features.map(({ label, Icon }) => (
        <li key={label} className="group flex items-center gap-4 whitespace-nowrap">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-white/80 bg-white/75 shadow-[0_8px_20px_rgba(15,23,42,0.08)] backdrop-blur">
            <Icon className="h-3.5 w-3.5 text-sky-700/90" aria-hidden="true" />
          </span>
          <span className="text-[0.84rem] font-medium tracking-[0.04em] text-slate-700/95 sm:text-[0.88rem]">
            {label}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function FeatureMarquee() {
  return (
    <section className="relative left-1/2 z-20 mt-6 w-screen -translate-x-1/2 overflow-hidden bg-gradient-to-r from-slate-100/85 via-white/70 to-cyan-50/65 py-3.5 shadow-[0_16px_34px_rgba(15,23,42,0.09)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.1),transparent_38%),radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.08),transparent_38%)]" />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-slate-50/95 via-slate-50/80 to-transparent sm:w-20" />

      <div className="feature-marquee relative flex items-center overflow-hidden">
        <div className="feature-marquee-track flex w-max items-center">
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </div>
    </section>
  )
}