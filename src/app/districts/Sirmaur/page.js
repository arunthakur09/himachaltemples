import Temples from "@/components/Temples";

export default function SirmaurTemples() {
  const district = 'Sirmaur'
  const temples = [
    {
      name: 'Renuka Ji Temple',
      location: 'Renuka Ji',
      description: 'Located on the banks of the Renuka Lake, this temple is dedicated to Goddess Renuka. The temple is surrounded by beautiful landscapes and is a major pilgrimage site.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Churdhar Temple',
      location: 'Churdhar Peak',
      description: 'Situated at the highest peak in the outer Himalayas, this temple is dedicated to Lord Shiva and offers breathtaking views and a challenging trek for adventure enthusiasts.',
      image: '/images/Sirmaur/Churdhar-Sirmaur.png',
      width: 600,
      height: 400
    },
    {
      name: 'Bala Sundari Temple',
      location: 'Trilokpur',
      description: 'Dedicated to Goddess Bala Sundari, this temple is an important religious site and attracts thousands of devotees, especially during the Navratri festival.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Mahasu Devta Temple',
      location: 'Hanol',
      description: 'An ancient temple dedicated to Lord Mahasu, known for its unique wooden architecture and spiritual significance. It is a prominent religious site in the region.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Guga Temple',
      location: 'Sirmaur',
      description: 'Dedicated to Guga, a folk deity worshiped in Himachal Pradesh, this temple is known for its local cultural importance and vibrant annual fair.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
