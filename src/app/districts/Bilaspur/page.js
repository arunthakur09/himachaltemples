import Temples from '@/components/Temples';

export default function BilaspurTemples() {
  const district = 'Bilaspur';
  const temples = [
    {
      name: 'Shri Naina Devi Ji Temple',
      location: 'Naina Devi',
      description: 'One of the most famous temples in Himachal Pradesh, dedicated to Goddess Naina Devi. It is located on a hilltop and offers a panoramic view of the Gobind Sagar Lake.',
      image: '/images/naina-devi-bilaspur.jpg',
      width: 600,
      height: 400
    },
    {
      name: 'Laxmi Narayan Mandir',
      location: 'Bilaspur Town',
      description: 'A beautiful temple dedicated to Lord Vishnu, known for its serene environment and intricate architecture.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Kandrour Bridge Temple',
      location: 'Kandrour',
      description: 'Located near the famous Kandrour Bridge, this temple is a serene spot offering peace and tranquility to its visitors.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Shri Rukmani Kund Mandir',
      location: 'Ghagus',
      description: 'A lesser-known yet beautiful temple dedicated to Rukmani, the consort of Lord Krishna. It is known for its peaceful ambiance and scenic location.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Baba Nahar Singh Temple',
      location: 'Dholra',
      description: 'A temple dedicated to Baba Nahar Singh, also known as the \'Fauji Baba\'. It is a popular spiritual site among the locals and known for its vibrant festivals.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
