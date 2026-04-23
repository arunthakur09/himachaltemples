import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { districts } from '@/data/districts';

export const metadata: Metadata = {
  title: 'Districts',
  description: 'Browse all 12 districts of Himachal Pradesh and discover key temple destinations in each region.',
};

export default function Districts() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Explore by Region</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Districts of Himachal Pradesh</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Select a district to explore its most revered temples, monasteries, and sacred sites.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {districts.map((district, index) => (
            <Link
              key={district.slug}
              href={`/districts/${district.slug}`}
              className="group block bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-48 bg-slate-100">
                <Image
                  width={600}
                  height={400}
                  src={district.image}
                  alt={district.displayName}
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow">
                  {district.displayName}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 leading-relaxed">{district.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:gap-2 transition-all">
                  Explore temples
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
