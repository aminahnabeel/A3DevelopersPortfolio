import {
  Smartphone,
  Globe,
  Zap,
  Brain,
  Database,
  Flame,
} from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Startup App Development',
    description: 'From idea to launch, complete mobile or web app development with modern UI, strong backend, and scalable architecture.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, responsive, and visually appealing websites for businesses, portfolios, and startups with a modern design approach.',
  },
  {
    icon: Zap,
    title: 'FYP Solutions',
    description: 'Final Year Project support including idea selection, development, documentation, and presentation guidance.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Enhance your applications with smart features like chatbots, recommendations, and intelligent automation.',
  },
  {
    icon: Database,
    title: 'Backend Development & Database Design',
    description: 'Secure and scalable backend development using Firebase, MongoDB, and SQL for efficient and reliable systems.',
  },
  {
    icon: Flame,
    title: 'App Improvement & Bug Fixing',
    description: 'Upgrade your existing apps with improved UI, performance optimization, and reliable bug fixing for a seamless experience.',
  },
]

export function Services() {
  return (
    <section id="services" className="px-4 pb-24 pt-32 sm:pb-28 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 text-balance sm:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 text-balance">
            Comprehensive solutions to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group flex h-full rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
              >
                <div className="flex h-full flex-col space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-slate-700 text-white shadow-lg shadow-slate-950/20 transition-transform group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="min-h-[3.5rem] text-xl font-semibold tracking-tight text-slate-950">
                    {service.title}
                  </h3>
                  <p className="leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
