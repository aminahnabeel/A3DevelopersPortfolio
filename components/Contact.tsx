'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, Phone } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contact" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Contact
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 text-balance sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 text-balance">
            Have a project in mind? We&apos;d love to hear from you. Let&apos;s discuss how we can help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-950">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 placeholder:text-slate-500 transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-950">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 placeholder:text-slate-500 transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-950">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 placeholder:text-slate-500 transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                Send Message
              </Button>

              {submitted && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 font-medium text-emerald-900">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-950">
                Contact Information
              </h3>
              <p className="mb-8 leading-7 text-slate-600">
                Reach out to us through any of the channels below. We&apos;re here to help and answer any questions you might have.
              </p>
            </div>

            {/* Email */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition-transform group-hover:scale-105">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-slate-950">Email</h4>
                  <a
                    href="mailto:hello@a3developers.com"
                    className="font-medium text-slate-600 transition-colors hover:text-slate-950"
                  >
                    hello@a3developers.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-950/20 transition-transform group-hover:scale-105">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-slate-950">WhatsApp</h4>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-600 transition-colors hover:text-slate-950"
                  >
                    +92 300 123 4567
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition-transform group-hover:scale-105">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-slate-950">Phone</h4>
                  <a
                    href="tel:+923001234567"
                    className="font-medium text-slate-600 transition-colors hover:text-slate-950"
                  >
                    +92 300 123 4567
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-semibold text-slate-950">Average Response Time:</span> We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
