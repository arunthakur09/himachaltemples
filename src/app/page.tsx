import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { districts } from '@/data/districts';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Plan temple visits across Himachal Pradesh with district-wise highlights and travel-friendly details.',
};

const stats = [
  { value: '12', label: 'Districts' },
  { value: '60+', label: 'Temples' },
  { value: '2,000+', label: 'Years of Heritage' },
];

const featured = districts.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Sacred Trails of Himachal</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Explore Temples Across Every District of Himachal Pradesh
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-blue-200 leading-relaxed">
            A curated guide to the sacred temples, ancient monasteries, and pilgrimage sites of the Himalayan state — organised district by district for easy discovery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/districts"
              className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors"
            >
              Browse Districts
            </Link>
            <Link
              href="/search"
              className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Search Temples
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="mt-0.5 text-sm text-blue-300 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Districts */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Start Exploring</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">Featured Districts</h2>
            </div>
            <Link href="/districts" className="text-sm font-medium text-blue-700 hover:underline hidden sm:block">
              View all 12 →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {featured.map((district, index) => (
              <Link
                key={district.slug}
                href={`/districts/${district.slug}`}
                className="group block bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-44 bg-slate-100">
                  <Image
                    src={district.image}
                    alt={district.displayName}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow">
                    {district.displayName}
                  </span>
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm text-slate-600 line-clamp-2">{district.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <Link href="/districts" className="text-sm font-medium text-blue-700 hover:underline">
              View all 12 districts →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">How It Works</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">Plan your temple journey in minutes</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            {[
              { step: '01', title: 'Choose a District', desc: 'Browse all 12 districts of Himachal Pradesh and pick the region that interests you.' },
              { step: '02', title: 'Discover Temples', desc: 'Explore curated listings with temple names, locations, and key historical context.' },
              { step: '03', title: 'Plan Your Visit', desc: 'Use the details to plan your spiritual journey across the beautiful Himalayan state.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                  {step}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
