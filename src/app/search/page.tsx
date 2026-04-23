import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchContent from './SearchContent';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search temples by name, location, deity, or district across all of Himachal Pradesh.',
};

export default function SearchPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Suspense
        fallback={
          <div className="container mx-auto px-6 py-16 text-center text-slate-500">
            Loading search…
          </div>
        }
      >
        <SearchContent />
      </Suspense>
    </div>
  );
}
