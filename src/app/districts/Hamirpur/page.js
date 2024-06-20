import Temples from '@/components/Temples';

export default function HamirpurTemples() {
  const district = "Hamirpur";
  const temples = [
    {
      name: 'Deotsidh Baba Balak Nath Temple',
      location: 'Deotsidh Hill',
      description: 'A famous temple dedicated to Baba Balak Nath, attracting numerous devotees, especially during the Navratras.',
      image: '/images/Hamirpur/balaknath-hamirpur.png',
      width: 600,
      height: 400
    },
    {
      name: 'Gasota Mahadev Temple',
      location: 'Gasota Village',
      description: 'An ancient temple dedicated to Lord Shiva, known for its spiritual ambiance and scenic surroundings.',
      image: '/images/Hamirpur/gasota_hamirpur.png',
      width: 600,
      height: 400
    },
    {
      name: 'Narvadeshwar Temple',
      location: 'Sujanpur Tira',
      description: 'Built by Maharani Prasanna Devi, this temple is renowned for its beautiful architecture and wall paintings.',
      image: '/images/Hamirpur/Narbadeshwar_Temple.jpg',
      width: 600,
      height: 400
    },
    {
      name: 'Tauni Devi Temple',
      location: 'Tauni Devi Village',
      description: 'A significant religious site dedicated to Goddess Tauni, offering a serene environment.',
      image: '/images/Hamirpur/tauni-hamirpur.png',
      width: 600,
      height: 400
    },
    {
      name: 'Murli Manohar Mandir',
      location: 'Sujanpur Tira',
      description: 'Dedicated to Lord Krishna, this temple is known for its historical importance and religious significance.',
      image: '/images/Hamirpur/Murali-sujanpur.png',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
