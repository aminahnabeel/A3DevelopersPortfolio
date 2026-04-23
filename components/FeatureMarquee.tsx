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
    <ul className="flex min-w-max items-center gap-10 px-6 sm:gap-14 sm:px-12 lg:gap-16" aria-label="Service highlights">
      {features.map(({ label, Icon }) => (
        <li key={label} className="flex items-center gap-4 whitespace-nowrap">
          <Icon className="h-4 w-4 text-sky-600/85" aria-hidden="true" />
          <span className="text-[0.82rem] font-medium uppercase tracking-[0.14em] text-slate-700 sm:text-sm">{label}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400/70" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
}

export function FeatureMarquee() {
  return (
    <section className="relative left-1/2 z-20 mt-6 w-screen -translate-x-1/2 overflow-hidden border-y border-white/70 bg-gradient-to-r from-slate-100/85 via-white/70 to-slate-100/85 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.07)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[oklch(0.985_0.012_240)] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[oklch(0.985_0.012_240)] to-transparent sm:w-20" />

      <div className="feature-marquee relative flex items-center overflow-hidden">
        <div className="feature-marquee-track flex w-max items-center">
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </div>
    </section>
  )
}