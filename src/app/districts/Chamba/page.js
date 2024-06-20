import Temples from '@/components/Temples';

export default function ChambaTemples() {
  const district ='Chamba'
  const temples = [
    {
      name: 'Laxmi Narayan Temple',
      location: 'Chamba Town',
      description: 'This temple is dedicated to Lord Vishnu and is one of the oldest and most revered temples in Chamba. It is known for its exquisite architecture and serene surroundings.',
      image: '/images/Chamba/laxmi-narayan-chamba.png',
      width: 600,
      height: 400
    },
    {
      name: 'Chamunda Devi Temple',
      location: 'Chamba Town',
      description: 'Perched on a hilltop, this temple is dedicated to Goddess Chamunda. It offers stunning views of the Chamba Valley and is an important religious site for the locals.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Bhuri Singh Museum',
      location: 'Chamba Town',
      description: 'While primarily a museum, it also houses a beautiful temple dedicated to Lord Shiva. The museum is named after Raja Bhuri Singh and showcases the rich cultural heritage of Chamba.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Banni Mata Temple',
      location: 'Banni Village',
      description: 'Located in the picturesque Banni village, this temple is dedicated to Goddess Kali. It is known for its vibrant festivals and the breathtaking views it offers.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Hari Rai Temple',
      location: 'Chamba Town',
      description: 'An ancient temple dedicated to Lord Vishnu, it is renowned for its beautiful bronze idol of Chaturmurti (four-faced) Vishnu. The temple is a fine example of the architectural brilliance of the region.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
