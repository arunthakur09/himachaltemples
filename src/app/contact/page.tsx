'use client';

import type { Metadata } from 'next';
import { useState, useTransition } from 'react';
import { sendContactEmail, type ContactFormState } from '@/app/actions/contact';

// Metadata cannot be exported from a 'use client' component; define it separately.
// The metadata is set via generateMetadata in a server wrapper or the parent layout.

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<ContactFormState | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;
    startTransition(async () => {
      const result = await sendContactEmail(formData);
      setState(result);
      if (result.success) form.reset();
    });
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Get in Touch</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-xl text-slate-600">
            Want to suggest updates, report incorrect details, or share temple information for your district? Send us a message.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="max-w-xl">
          {state?.success ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-green-900">Message sent!</h2>
              <p className="mt-2 text-green-700">Thanks for reaching out. We will get back to you soon.</p>
              <button
                onClick={() => setState(null)}
                className="mt-6 text-sm font-medium text-green-700 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition resize-none"
                  placeholder="Tell us about a temple, correction, or suggestion…"
                />
              </div>

              {state?.error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {state.error}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
