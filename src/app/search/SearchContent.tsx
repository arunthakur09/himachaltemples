'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { districts } from '@/data/districts';
import type { Temple, District } from '@/data/districts';

interface TempleResult {
  temple: Temple;
  district: District;
}

function getAllTemples(): TempleResult[] {
  return districts.flatMap((district) =>
    district.temples.map((temple) => ({ temple, district })),
  );
}

const allTemples = getAllTemples();

function search(query: string): TempleResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return allTemples.filter(
    ({ temple, district }) =>
      temple.name.toLowerCase().includes(q) ||
      temple.location.toLowerCase().includes(q) ||
      temple.description.toLowerCase().includes(q) ||
      district.displayName.toLowerCase().includes(q),
  );
}

export default function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<TempleResult[]>(() => search(initialQuery));

  const updateResults = useCallback((value: string) => {
    setQuery(value);
    setResults(search(value));
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set('q', value);
    } else {
      params.delete('q');
    }
    router.replace(`/search?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    if (q !== query) {
      setQuery(q);
      setResults(search(q));
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const hasQuery = query.trim().length > 0;

  return (
    <>
      {/* Search input */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Search</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 mb-6">Find a Temple</h1>
          <div className="relative max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => updateResults(e.target.value)}
              placeholder="Search by temple name, location, or district…"
              autoFocus
              className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            />
            {hasQuery && (
              <button
                aria-label="Clear search"
                onClick={() => updateResults('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-6 py-8">
        {!hasQuery && (
          <div className="text-center py-16 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-lg font-medium text-slate-700">Search across 60+ temples</p>
            <p className="mt-1 text-sm">Type a temple name, location, deity, or district above.</p>
          </div>
        )}

        {hasQuery && results.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <p className="text-lg font-medium text-slate-700">No results for &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-sm">Try a different keyword, or{' '}
              <Link href="/districts" className="text-blue-700 hover:underline">browse by district</Link>.
            </p>
          </div>
        )}

        {hasQuery && results.length > 0 && (
          <>
            <p className="text-sm text-slate-500 mb-6">
              {results.length} result{results.length !== 1 ? 's' : ''} for <strong className="text-slate-700">&ldquo;{query}&rdquo;</strong>
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map(({ temple, district }) => (
                <Link
                  key={`${district.slug}-${temple.name}`}
                  href={`/districts/${district.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-semibold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                        {temple.name}
                      </h2>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{temple.location}</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">{temple.description}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-slate-500 bg-slate-100 rounded-full px-2.5 py-1 whitespace-nowrap">
                      {district.displayName}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
