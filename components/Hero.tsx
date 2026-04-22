'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import heroPreview from '../img.png'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-14 sm:pt-20 lg:flex lg:min-h-screen lg:items-center lg:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.72))]" />
      <div className="absolute -left-28 top-28 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-emerald-300/12 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-600" />
            Modern web, mobile, and AI solutions for ambitious teams
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 text-balance sm:text-6xl lg:text-7xl">
              Clean digital products,
              <span className="block bg-gradient-to-r from-slate-950 via-sky-700 to-emerald-700 bg-clip-text text-transparent">
                built with taste.
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 text-balance sm:text-xl">
              We design and build polished web applications, mobile apps, and AI-driven systems that feel premium, ship fast, and stay practical for real budgets.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-slate-950 px-8 text-white shadow-lg shadow-slate-950/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              onClick={() => scrollToSection('projects')}
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="rounded-full border border-slate-200 bg-white/80 px-8 text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get Started Today
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <p className="text-4xl font-semibold tracking-tight text-slate-950">50+</p>
              <p className="mt-2 text-sm font-medium text-slate-600">Projects completed</p>
            </div>
            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <p className="text-4xl font-semibold tracking-tight text-slate-950">100+</p>
              <p className="mt-2 text-sm font-medium text-slate-600">Happy clients</p>
            </div>
            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <p className="text-4xl font-semibold tracking-tight text-slate-950">5+</p>
              <p className="mt-2 text-sm font-medium text-slate-600">Years experience</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-200/40 via-white to-emerald-200/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-4">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white">
              <Image
                src={heroPreview}
                alt="Studio preview"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
