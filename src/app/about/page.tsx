import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the purpose of Himachal Temples and how this platform organises district-wise temple discovery.',
};

interface Feature {
  title: string;
  desc: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    title: 'District-First Discovery',
    desc: 'Every temple is catalogued under its district so travellers can plan itineraries around the regions they are visiting.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Concise & Practical',
    desc: 'Each listing gives you the temple name, location, and a concise description — enough to decide if it belongs on your itinerary.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'All 12 Districts Covered',
    desc: "From Lahaul & Spiti's high-altitude monasteries to Una's Shakti Peethas, every district in Himachal Pradesh is represented.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V13h6v8" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Our Mission</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">About Himachal Temples</h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Himachal Temples is a curated guide built to help travellers, devotees, and explorers discover important temples across all districts of Himachal Pradesh. Our goal is to make local spiritual heritage easier to explore by presenting concise, practical information in a district-first format.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-slate-900 mb-8">What we offer</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map(({ title, desc, icon }) => (
            <div key={title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700 mb-4">
                {icon}
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl border border-slate-100 shadow-sm p-8 max-w-3xl">
          <h2 className="text-xl font-bold text-slate-900">Why we built this</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Himachal Pradesh is home to an extraordinary density of temples — from rock-cut shrines and pagoda-style wooden temples to high-altitude Buddhist monasteries. Yet much of this heritage remains scattered across fragmented sources, making trip planning harder than it needs to be.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Himachal Temples brings this information together in one place, structured the way most people travel: by geography. Whether you are planning a pilgrimage circuit through Kangra or a monastery trail in Spiti, you can quickly get an overview of what each district has to offer.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Have corrections, suggestions, or temple information to contribute?{' '}
            <Link href="/contact" className="text-blue-700 font-medium hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
