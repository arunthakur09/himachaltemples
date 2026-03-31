import Link from 'next/link';

export const metadata = {
  title: 'Home',
  description: 'Plan temple visits across Himachal Pradesh with district-wise highlights and travel-friendly details.',
};

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Sacred Trails of Himachal</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Explore famous temples across all districts of Himachal Pradesh
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-700">
          Discover district-wise temple highlights, quick context, and inspiration for your next spiritual journey in the hills.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/districts" className="rounded-md bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800">
            Browse Districts
          </Link>
          <Link href="/articles" className="rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-100">
            Read Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
