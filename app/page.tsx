import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_36%),radial-gradient(circle_at_80%_18%,rgba(45,212,191,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[42rem] -z-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-[74rem] -z-10 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
      <Navigation />
      <div className="pt-20">
        <Hero />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
