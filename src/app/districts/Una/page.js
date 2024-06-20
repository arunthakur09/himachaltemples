import Temples from "@/components/Temples";

export default function UnaTemples() {
  const district = 'Una'
  const temples = [
    {
      name: 'Chintpurni Temple',
      location: 'Chintpurni',
      description: 'One of the most revered Shakti Peethas, this temple is dedicated to Goddess Chintpurni, who is believed to fulfill the wishes of her devotees.',
      image: '/images/Una/Chintpurani-una.png',
      width: 600,
      height: 400
    },
    {
      name: 'Shri Radha Krishan Temple',
      location: 'Una Town',
      description: 'This temple is dedicated to Lord Krishna and Radha, known for its serene environment and beautiful architecture.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Dera Baba Barbhag Singh',
      location: 'Nangal Shaheedan',
      description: 'A revered religious site dedicated to Baba Barbhag Singh, known for its spiritual ambiance and the annual fair that attracts thousands of devotees.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Shivbari Temple',
      location: 'Gagret',
      description: 'Dedicated to Lord Shiva, this temple is known for its ancient significance and peaceful surroundings, attracting many devotees.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Bangana Laxmi Narayan Temple',
      location: 'Bangana',
      description: 'A beautiful temple dedicated to Lord Vishnu, located in Bangana. It is known for its serene environment and vibrant festivals.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
