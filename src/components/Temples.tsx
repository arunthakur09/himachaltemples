import Link from 'next/link';
import Image from 'next/image';
import type { District, Temple } from '@/data/districts';

function TempleCard({ temple, priority }: { temple: Temple; priority: boolean }) {
  const hasImage = temple.image.trim().length > 0;

  return (
    <article className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-52 bg-slate-100">
        {hasImage ? (
          <Image
            priority={priority}
            src={temple.image}
            alt={temple.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col h-full items-center justify-center gap-2 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
            </svg>
            <span className="text-xs font-medium tracking-wide uppercase">Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-slate-900 leading-snug">{temple.name}</h2>
        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{temple.location}</span>
        </div>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{temple.description}</p>
      </div>
    </article>
  );
}

export default function Temples({ district }: { district: District }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/districts" className="hover:text-blue-700 transition-colors">Districts</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-800 font-medium">{district.displayName}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Himachal Pradesh</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            Temples of {district.displayName}
          </h1>
          <p className="mt-2 text-slate-600">{district.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {district.temples.map((temple, index) => (
            <TempleCard key={temple.name} temple={temple} priority={index < 3} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/districts"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Districts
          </Link>
        </div>
      </div>
    </div>
  );
}
