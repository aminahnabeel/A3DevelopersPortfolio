import { Github, Linkedin, Twitter, MessageSquare } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: MessageSquare, href: 'https://wa.me/923001234567', label: 'WhatsApp' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white px-4 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.1),transparent_34%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.08),transparent_30%)]" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl font-semibold text-white shadow-lg shadow-slate-950/20">
                A3
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                A3 Developers
              </h3>
            </div>
            <p className="leading-7 text-slate-600">
              Building smart solutions for modern projects. Affordable, reliable, and innovative.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-6 font-semibold text-slate-950">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-medium text-slate-600 transition-colors hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-6 font-semibold text-slate-950">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-lg shadow-slate-950/5 transition-all hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-950 hover:text-white hover:shadow-xl"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">
            <p>
              &copy; {currentYear} A3 Developers. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-medium transition-colors hover:text-slate-950">
                Privacy Policy
              </a>
              <a href="#" className="font-medium transition-colors hover:text-slate-950">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
