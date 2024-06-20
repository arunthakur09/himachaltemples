import Temples from "@/components/Temples";

export default function LahaulSpitiTemples() {
  const district = 'Lahaul-Spiti';
  const temples = [
    {
      name: 'Key Monastery',
      location: 'Spiti Valley',
      description: 'A stunning Tibetan Buddhist monastery located on a picturesque hilltop, known for its beautiful murals and ancient scriptures.',
      image: '/images/Lahaul-Spiti/Key_monastery.jpg',
      width: 600,
      height: 400
    },
    {
      name: 'Tabo Monastery',
      location: 'Tabo Village',
      description: 'One of the oldest monasteries in the Himalayas, famous for its exquisite wall paintings and ancient Buddhist scriptures.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Dhankar Monastery',
      location: 'Dhankar Village',
      description: 'Perched on a cliff, this monastery offers breathtaking views of the confluence of the Spiti and Pin rivers. It is known for its historical significance and beautiful frescoes.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Gue Monastery',
      location: 'Gue Village',
      description: 'Known for housing a naturally mummified monk, this monastery is unique and attracts many visitors for its intriguing history and serene surroundings.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Komic Monastery',
      location: 'Komic Village',
      description: 'Situated in one of the highest villages in the world, this monastery is known for its ancient murals and statues. It is a serene spot offering a peaceful environment.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
