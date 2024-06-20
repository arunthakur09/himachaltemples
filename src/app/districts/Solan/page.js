import Temples from "@/components/Temples";

export default function SolanTemples() {
  const district = 'Solan'
  const temples = [
    {
      name: 'Shoolini Mata Temple',
      location: 'Solan Town',
      description: 'One of the most revered temples in Solan, dedicated to Shoolini Mata, the presiding deity of the region. The temple is known for its vibrant annual fair.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Jatoli Shiv Temple',
      location: 'Jatoli',
      description: 'Famous for its architectural beauty and spiritual significance, this temple is dedicated to Lord Shiva and is considered one of the highest temples in Asia.',
      image: '/images/Solan/Jatoli-solan.png',
      width: 600,
      height: 400
    },
    {
      name: 'Mohan Shakti National Heritage Park',
      location: 'Solan',
      description: 'A grand temple complex and heritage park showcasing Indian culture and spirituality. It features impressive sculptures and offers a serene environment.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Kali Mata Temple',
      location: 'Solan Town',
      description: 'Dedicated to Goddess Kali, this temple is known for its peaceful surroundings and is a popular spot for both devotees and tourists.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Bon Monastery',
      location: 'Dolanji',
      description: 'A prominent Bon monastery in the region, known for its tranquil ambiance and beautiful architecture. It is an important center for the Bon religion.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
