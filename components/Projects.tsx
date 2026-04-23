import Image from 'next/image'
import projectOne from '../1.png'
import projectTwo from '../2.png'
import projectThree from '../3.png'

const projects = [
  {
    title: 'Smart Umrah Guide App',
    description: 'A smart mobile application designed to guide users through the Umrah journey with step-by-step instructions and AI assistance.',
    tags: ['Flutter', 'Firebase', 'Gemini API'],
    image: projectOne,
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent',
  },
  {
    title: 'Skill Swap',
    description: 'An AI-powered platform where users can exchange skills, connect with others, and grow through a smart matching system.',
    tags: ['Flutter', 'Firebase', 'Stripe', 'Gemini API', 'Google Maps API', 'Python'],
    image: projectTwo,
    accent: 'from-amber-400/25 via-yellow-300/15 to-transparent',
  },
  {
    title: 'Incident Reporting & Hotspot Detection',
    description: 'A safety-focused application that allows users to report incidents and identifies high-risk areas using AI.',
    tags: ['Flutter', 'MongoDB', 'AI/ML'],
    image: projectThree,
    accent: 'from-rose-500/25 via-red-400/15 to-transparent',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-4 pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_58%)]" />
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 px-6 py-2 text-center sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Recent work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 text-balance sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 text-balance">
            Product-minded builds with polished UX, strong engineering, and measurable outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative isolate flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_26px_70px_rgba(15,23,42,0.14)]"
            >
              <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${project.accent}`} />

              {/* Project Image */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 p-4">
                <div className="relative flex h-full w-full items-start justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.1)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain object-top p-1.5 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-7">
                <h3 className="mb-2 min-h-[3.5rem] text-2xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-slate-700">
                  {project.title}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
