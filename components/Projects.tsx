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
  },
  {
    title: 'Skill Swap',
    description: 'An AI-powered platform where users can exchange skills, connect with others, and grow through a smart matching system.',
    tags: ['Flutter', 'Firebase', 'Stripe', 'Gemini API', 'Google Maps API', 'Python'],
    image: projectTwo,
  },
  {
    title: 'Incident Reporting & Hotspot Detection',
    description: 'A safety-focused application that allows users to report incidents and identifies high-risk areas using AI.',
    tags: ['Flutter', 'MongoDB', 'AI/ML'],
    image: projectThree,
  },

]

export function Projects() {
  return (
    <section id="projects" className="px-4 pb-24 pt-16 sm:pb-28 sm:pt-20">
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
              {/* Project Image */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 to-slate-50 p-3">
                <div className="relative flex h-full w-full items-start justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain object-top p-1.5 transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 min-h-[3.5rem] text-xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-slate-700">
                  {project.title}
                </h3>
                <p className="mb-5 flex-grow text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
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
