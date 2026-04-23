import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V13h6v8" />
              </svg>
              Himachal Temples
            </div>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              A curated guide to the sacred temples and monasteries of Himachal Pradesh, organised district by district.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/districts" className="hover:text-white transition-colors">Districts</Link></li>
              <li><Link href="/search" className="hover:text-white transition-colors">Search</Link></li>
              <li><Link href="/articles" className="hover:text-white transition-colors">Articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-6 text-center text-sm">
          <p>&copy; {year} Himachal Temples. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
