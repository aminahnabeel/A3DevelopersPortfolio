import {
  DollarSign,
  Users,
  Zap,
  Lightbulb,
} from 'lucide-react'

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
    <section id="why-choose-us" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
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
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
              >
                <div className="space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-slate-900 text-white shadow-lg shadow-slate-950/20 transition-transform group-hover:scale-105">
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
        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-12">
          <p className="text-lg text-slate-600">
            Ready to get started with your next project?
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 text-balance sm:text-4xl">
            Let&apos;s build something amazing together
          </h3>
        </div>
      </div>
    </section>
  )
}
