import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration, inventory management, and order tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛒',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team collaboration features.',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: '✅',
  },
  {
    title: 'AI Chatbot System',
    description: 'Intelligent chatbot with natural language processing for customer support automation.',
    tags: ['Python', 'NLP', 'TensorFlow', 'FastAPI'],
    image: '🤖',
  },
  {
    title: 'Social Media Platform',
    description: 'Full-stack social network with messaging, notifications, and user interactions.',
    tags: ['Next.js', 'PostgreSQL', 'GraphQL', 'Redis'],
    image: '📱',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization and analytics platform with interactive charts.',
    tags: ['Vue.js', 'D3.js', 'Python', 'WebSockets'],
    image: '📊',
  },
  {
    title: 'Healthcare Management System',
    description: 'Patient records management, appointment scheduling, and telemedicine integration.',
    tags: ['Flutter', 'Firebase', 'Stripe'],
    image: '🏥',
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Recent work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 text-balance sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 text-balance">
            Showcasing our best work and successful client solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
            >
              {/* Image/Emoji */}
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-950 via-slate-800 to-cyan-900 text-6xl transition-transform duration-300 group-hover:scale-[1.03]">
                <span className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]">{project.image}</span>
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-slate-700">
                  {project.title}
                </h3>
                <p className="mb-4 flex-grow text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-all group-hover:gap-3 group-hover:text-slate-950">
                  Learn more
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
