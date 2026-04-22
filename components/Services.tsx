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
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that work seamlessly across all devices.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies and best practices.',
  },
  {
    icon: Zap,
    title: 'FYP Solutions',
    description: 'Complete final year project implementation with guidance and professional delivery.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Machine learning, computer vision, and AI-powered solutions for complex problems.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Scalable, efficient database architecture tailored to your application needs.',
  },
  {
    icon: Flame,
    title: 'Firebase Integration',
    description: 'Fast backend setup with Firebase - authentication, database, and real-time features.',
  },
]

export function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
            What we do
          </p>
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
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
              >
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-slate-700 text-white shadow-lg shadow-slate-950/20 transition-transform group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
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
