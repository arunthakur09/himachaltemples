import Temples from "@/components/Temples";

export default function ShimlaTemples() {
  const district = 'Shimla';
  const temples = [
    {
      name: 'Jakhoo Temple',
      location: 'Jakhoo Hill',
      description: 'Dedicated to Lord Hanuman, this temple is situated on the highest peak in Shimla, offering stunning views of the surrounding area.',
      image: '/images/Shimla/Jaakho_shimla.png',
      width: 600,
      height: 400
    },
    {
      name: 'Kali Bari Temple',
      location: 'Shimla Town',
      description: 'Built in 1845, this temple is dedicated to Goddess Kali and is one of the most famous temples in Shimla, known for its beautiful architecture and serene environment.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Tara Devi Temple',
      location: 'Tara Devi',
      description: 'Located on Tara Devi hill, this temple offers a peaceful retreat with panoramic views of the Himalayas. It is dedicated to Goddess Tara.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Sankat Mochan Temple',
      location: 'Shimla Town',
      description: 'This temple is dedicated to Lord Hanuman and is known for its tranquil atmosphere and beautiful surroundings, making it a popular spot for both locals and tourists.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Shri Hanuman Mandir Jakhoo',
      location: 'Jakhoo Hill',
      description: 'Another temple dedicated to Lord Hanuman, located on Jakhoo Hill. It features a giant statue of Hanuman, which is a major attraction in Shimla.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
