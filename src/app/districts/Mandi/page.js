import Temples from "@/components/Temples";

export default function MandiTemples() {
  const district = 'Mandi';
  const temples = [
    {
      name: 'Bhima Kali Temple',
      location: 'Sarahan Village',
      description: 'A temple dedicated to Goddess Bhimakali, known for its intricate wood carvings and stunning Himalayan backdrop.',
      image: '/images/Mandi/Bhima-Kaali-mandi.png',
      width: 600,
      height: 400
    },
    {
      name: 'Prashar Lake Temple',
      location: 'Near Prashar Lake',
      description: 'This temple is dedicated to Sage Prashar, featuring unique pagoda-style architecture and panoramic views of the Dhauladhar range.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Tarna Temple',
      location: 'Tarna Hill',
      description: 'Also known as Shyama Kali Temple, it offers breathtaking views of Mandi town and Beas River.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Triloknath Temple',
      location: 'Mandi Town',
      description: 'Dedicated to Lord Shiva, this temple is known for its stunning Shikhara architecture and ancient heritage.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Bhootnath Temple',
      location: 'Mandi Town',
      description: 'Famous for its Maha Shivaratri festival, this temple is dedicated to Lord Shiva and attracts thousands of devotees.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
