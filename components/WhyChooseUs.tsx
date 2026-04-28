import Image from 'next/image'
import {
  DollarSign,
  Users,
  Zap,
  Lightbulb,
} from 'lucide-react'
import projectPreview from '../4.png'

const reasons = [
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Premium quality services at competitive rates. We believe great solutions should be accessible to everyone.',
  },
  {
    icon: Users,
    title: 'Student-Friendly',
    description: 'Special packages for students and startups. We understand budgets and offer flexible payment options.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Rapid turnaround without compromising quality. Your project gets the attention it deserves, on time.',
  },
  {
    icon: Lightbulb,
    title: 'Modern Technologies',
    description: 'Using cutting-edge tools and frameworks. We stay updated with industry trends and best practices.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden px-4 py-32 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem] bg-[radial-gradient(circle_at_15%_20%,_rgba(16,185,129,0.14),_transparent_58%)]" />
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 space-y-5 text-center sm:mb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Why choose us
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 text-balance sm:text-5xl">
            Why Choose A3 Developers?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 text-balance">
            We offer what others don&apos;t - quality, affordability, and true partnership
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group relative isolate overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-cyan-50/60" />
                <div className="space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-slate-900 text-white shadow-lg shadow-slate-950/20 transition-transform group-hover:scale-105">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {reason.title}
                  </h3>
                  <p className="leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative flex h-full min-h-[300px] items-center p-7 sm:p-10">
              <div className="relative z-10 mt-4 max-w-xl space-y-5 sm:mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                  Ready to build?
                </p>
                <h3 className="text-3xl font-semibold tracking-tight text-slate-950 text-balance sm:text-4xl">
                  Let&apos;s launch something your users will love.
                </h3>
                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  From idea validation to production deployment, we move fast and ship with quality.
                </p>
              </div>
            </div>

            <div className="relative flex h-full min-h-[260px] items-center justify-center p-4 sm:p-5">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-50/80 via-white/40 to-sky-50/60 ring-1 ring-slate-200/40" />

                <div className="absolute -right-6 -bottom-6 w-56 h-40 rounded-2xl bg-gradient-to-br from-slate-900/6 to-cyan-500/6 transform -rotate-6 shadow-[0_40px_90px_rgba(2,6,23,0.18)] blur-3xl" />

                <div className="absolute -right-4 -bottom-4 w-56 h-40 rounded-2xl bg-white/6 transform -rotate-6 shadow-[0_22px_60px_rgba(2,6,23,0.12)]" />

                <div className="relative z-10 overflow-hidden rounded-3xl ring-1 ring-slate-200/60">
                  <Image
                    src={projectPreview}
                    alt="Project collaboration preview"
                    className="h-auto w-full max-w-xl object-cover rounded-3xl"
                    sizes="(max-width: 1400px) 100vw, 900px"
                    priority
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
