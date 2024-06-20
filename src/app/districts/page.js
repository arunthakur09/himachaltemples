import Head from 'next/head';
import Link from 'next/link';
import Image from "next/legacy/image";

export default function Districts() {
  const districts = [
    {
      name: 'Bilaspur',
      description: 'Bilaspur is known for its Gobind Sagar Lake and the Naina Devi Temple.',
      image: '/images/Bilaspur/naina-devi-bilaspur.jpg',
      width: 600,
      height: 400
    },
    {
      name: 'Chamba',
      description: 'Chamba is famous for its ancient temples and rich cultural heritage. It is also known for its beautiful valley and lakes.',
      image: '/images/Chamba/laxmi-narayan-chamba.png',
      width: 600,
      height: 400
    },
    {
      name: 'Hamirpur',
      image: '/images/Hamirpur/gasota_hamirpur.png',
      description: 'Known for its educational institutions and scenic beauty, Hamirpur is a prominent district in Himachal Pradesh.',
      width: 600,
      height: 400
    },
    {
      name: 'Kangra',
      description: 'Kangra is known for its ancient temples and picturesque landscapes. It is one of the most populous districts in Himachal Pradesh.',
      image: '/images/Kangra/chamunda-temple-kangra.png',
      width: 600,
      height: 400
    },
    {
      name: 'Kinnaur',
      image: '/images/Kinnaur/Mathi-Temple-Chhitkul.png',
      description: 'Famous for its apple orchards and the Kinnaur Kailash mountain, Kinnaur is a stunning district in Himachal Pradesh.',
      width: 600,
      height: 400
    },
    {
      name: 'Kullu',
      description: 'Kullu is renowned for its beautiful valleys, adventure sports, and the famous Kullu Dussehra festival.',
      image: '/images/Kullu/Bijli_Mahadev_Temple.jpg',
      width: 600,
      height: 400
    },
    {
      name: 'Lahaul-Spiti',
      image: '/images/Lahaul-Spiti/Key_monastery.jpg',
      description: 'Known for its rugged terrain and Buddhist monasteries, Lahaul and Spiti is a district of stark beauty.',
      width: 600,
      height: 400
    },
    {
      name: 'Mandi',
      description: 'Mandi is known for its historic temples and scenic beauty. It hosts the annual Shivratri fair.',
      image: '/images/Mandi/Bhima-Kaali-mandi.png',
      width: 600,
      height: 400
    },
    {
      name: 'Shimla',
      description: 'Shimla, the capital city of Himachal Pradesh, is famous for its Victorian architecture and beautiful hills.',
      image: '/images/Shimla/Jaakho_shimla.png',
      width: 600,
      height: 400
    },
    {
      name: 'Sirmaur',
      description: 'Sirmaur is known for its serene landscapes and the famous Renuka Lake.',
      image: '/images/Sirmaur/Churdhar-Sirmaur.png',
      width: 600,
      height: 400
    },
    {
      name: 'Solan',
      description: 'Solan is known as the "Mushroom City of India" and has beautiful monasteries and temples.',
      image: '/images/Solan/Jatoli-solan.png',
      width: 600,
      height: 400
    },
    {
      name: 'Una',
      description: 'Una is known for its temples and the annual Holi fair.',
      image: '/images/Una/Chintpurani-una.png',
      width: 600,
      height: 400
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Districts of Himachal Pradesh</title>
      </Head>
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Districts of Himachal Pradesh</h1>
      </header>
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {districts.map((district, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link href={`/districts/${district.name}`}>
                    <Image width={district.width} height={district.height} src={district.image} alt={district.name} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{district.name}</h2>
                        <p className="text-gray-700">{district.description}</p>
                    </div>
                    </Link>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Districts of Himachal Pradesh</p>
      </footer>
    </div>
  );
}
