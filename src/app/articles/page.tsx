import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Read practical articles and regional insights for temple travel across Himachal Pradesh.',
};

interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

const articles: Article[] = [
  {
    slug: 'best-time-to-visit',
    category: 'Travel Planning',
    title: 'Best Time to Visit Temples in Himachal Pradesh',
    excerpt:
      'Himachal Pradesh temples are accessible year-round, but timing your visit to the season and altitude can make a significant difference. High-altitude monasteries in Spiti are best visited between June and September, while lower-altitude temples in Kangra and Una are welcoming even in winter.',
    readTime: '5 min read',
  },
  {
    slug: 'temple-etiquette',
    category: 'Visitor Guide',
    title: 'Temple Etiquette: What to Know Before You Visit',
    excerpt:
      'Dress modestly, remove footwear at the entrance, and avoid leather articles inside many shrines. Photography rules vary — some temples permit it freely, others restrict it near the sanctum. Arriving during aarti (morning or evening prayer) offers a deeply immersive experience.',
    readTime: '4 min read',
  },
  {
    slug: 'shakti-peethas',
    category: 'Spirituality',
    title: 'The Shakti Peethas of Himachal Pradesh',
    excerpt:
      'Himachal Pradesh is home to several of the 51 Shakti Peethas — the most sacred sites in the Shakta tradition. Chintpurni in Una, Jwalamukhi and Chamunda Devi in Kangra, and Naina Devi in Bilaspur each have distinct legends, architectural styles, and pilgrimage seasons.',
    readTime: '7 min read',
  },
  {
    slug: 'kangra-temple-circuit',
    category: 'Itineraries',
    title: 'A Spiritual Circuit Through Kangra District',
    excerpt:
      'Kangra district packs an exceptional density of sacred sites into a compact area. A well-planned two-day circuit can cover Bajreshwari Devi in Kangra town, the eternal flame at Jwalamukhi, the riverside Chamunda Devi temple, and the rock-cut wonders of Masroor — all within a short drive of each other.',
    readTime: '6 min read',
  },
  {
    slug: 'monasteries-of-spiti',
    category: 'Destination',
    title: 'Monasteries of Spiti: A High-Altitude Pilgrimage',
    excerpt:
      "The Spiti Valley in Lahaul & Spiti district is home to some of the world's oldest and most remote Buddhist monasteries. Key Monastery, Tabo (founded in 996 AD), and Dhankar Monastery perched on a cliffside offer not just spiritual significance but dramatic Himalayan scenery at every turn.",
    readTime: '8 min read',
  },
  {
    slug: 'wooden-temples-himachal',
    category: 'Architecture',
    title: 'The Distinctive Wooden Temples of Himachal Pradesh',
    excerpt:
      'The "Kath-Kuni" and pagoda-style wooden temple architecture of Himachal Pradesh is unique in India. Using alternating layers of stone and deodar cedar wood, temples like Narvadeshwar in Hamirpur and Triloknath in Mandi have survived earthquakes for centuries — a testament to ancient engineering wisdom.',
    readTime: '6 min read',
  },
];

export default function Articles() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Insights & Guides</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Articles</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Practical guides, travel inspiration, and deeper dives into the spiritual heritage of Himachal Pradesh.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900 leading-snug">{article.title}</h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{article.excerpt}</p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="text-sm font-medium text-slate-400 italic">Full article coming soon</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
