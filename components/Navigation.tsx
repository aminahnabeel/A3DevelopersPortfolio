'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import logo from '../logo.png'

// Inline SVG icons to avoid import/type mismatches
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setActiveHref(href)
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden rounded-b-[2rem] border border-white/60 bg-white/80 shadow-[0_22px_65px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <button
              className="group flex items-center gap-4"
              onClick={() => handleNavClick('#home')}
              aria-label="Go to home"
            >
              <Image
                src={logo}
                alt="A3 Developers"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
                priority
              />
              <span className="hidden text-[1.05rem] font-semibold tracking-tight text-slate-950 sm:inline">
                A3 Developers
              </span>
            </button>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 lg:px-5 ${
                  activeHref === link.href
                    ? 'bg-slate-950 text-white shadow-[0_10px_20px_rgba(15,23,42,0.25)]'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}>
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button
                size="sm"
                className="rounded-full border border-slate-900/10 bg-slate-950 px-5 text-white shadow-lg shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
                onClick={() => handleNavClick('#contact')}
              >
                Get Started
              </Button>
            </div>

            <button
              className="rounded-2xl border border-slate-200/80 bg-white/90 p-2.5 text-slate-700 shadow-sm transition-colors hover:bg-slate-100 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6 text-foreground" />
              ) : (
                <MenuIcon className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200/80 bg-white/95 md:hidden">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeHref === link.href
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`}>
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="mt-2 w-full rounded-full bg-slate-950 text-white hover:bg-slate-800"
              onClick={() => handleNavClick('#contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
