import Head from 'next/head';
import Image from "next/legacy/image";

export default function Temples({ district, temples }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Top 5 Temples in {district}</title>
      </Head>
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Top 5 Temples to Visit in {district}, Himachal Pradesh</h1>
      </header>
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temples.map((temple, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  priority={true}
                  src={temple.image}
                  alt={temple.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{temple.name}</h2>
                <p className="text-gray-600 mb-2"><strong>Location:</strong> {temple.location}</p>
                <p className="text-gray-700">{temple.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Temples in {district}</p>
      </footer>
    </div>
  );
}
