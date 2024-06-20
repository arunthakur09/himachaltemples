import Temples from '@/components/Temples';

export default function KangraTemples() {
  const district = 'kangra'
  const temples = [
    {
      name: 'Bajreshwari Devi Temple',
      location: 'Kangra Town',
      description: 'One of the most revered temples dedicated to Goddess Bajreshwari, known for its historic significance and architectural beauty.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Chamunda Devi Temple',
      location: 'Chamunda',
      description: 'Dedicated to Goddess Chamunda, this temple is situated on the banks of the Baner River and is known for its spiritual ambiance and scenic surroundings.',
      image: '/images/chamunda-temple-kangra.png',
      width: 600,
      height: 400
    },
    {
      name: 'Jwalamukhi Temple',
      location: 'Jwalamukhi Town',
      description: 'Famous for its eternal flame that burns without any fuel, this temple is dedicated to Goddess Jwalamukhi and is one of the 51 Shakti Peethas.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Masroor Rock Cut Temple',
      location: 'Masroor',
      description: 'An ancient temple complex carved out of a single rock, known for its elaborate rock carvings and stunning architecture, dedicated to Lord Shiva.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Baglamukhi Temple',
      location: 'Bankhandi',
      description: 'Dedicated to Goddess Baglamukhi, this temple is a significant pilgrimage site and is believed to grant victory over enemies and protection from evil.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
