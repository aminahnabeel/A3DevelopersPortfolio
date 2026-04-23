import { Github, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white px-4 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.1),transparent_34%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.08),transparent_30%)]" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 grid gap-12 md:grid-cols-2">
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

          {/* Social Links */}
          <div className="md:pl-20 lg:pl-24">
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
          <div className="flex items-center justify-center text-sm text-slate-600">
            <p>
              &copy; {currentYear} A3 Developers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
