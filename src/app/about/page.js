export const metadata = {
  title: 'About',
  description: 'Learn about the purpose of Himachal Temples and how this platform organizes district-wise temple discovery.',
};

export default function AboutUs() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">About Himachal Temples</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Himachal Temples is a curated guide built to help travelers, devotees, and explorers discover important temples across all districts of Himachal Pradesh.
      </p>
      <p className="mt-3 max-w-3xl text-slate-700">
        Our goal is to make local spiritual heritage easier to explore by organizing destinations in a district-first format and presenting concise, practical details.
      </p>
    </section>
  );
}
  