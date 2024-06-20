import Temples from "@/components/Temples";

export default function KulluTemples() {
  const district = 'Kullu'
  const temples = [
    {
      name: 'Bijli Mahadev Temple',
      location: 'Kullu Valley',
      description: 'A renowned temple dedicated to Lord Shiva, known for its high altitude and scenic views. The temple is famous for its 60-feet tall lightning rod.',
      image: '/images/Bijli_Mahadev_Temple.jpg',
      width: 600,
      height: 400
    },
    {
      name: 'Raghunath Temple',
      location: 'Kullu Town',
      description: 'One of the most famous temples in Kullu, dedicated to Lord Raghunath (Lord Rama). It plays a central role during the Kullu Dussehra festival.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Manikaran Sahib',
      location: 'Parvati Valley',
      description: 'A sacred site for both Sikhs and Hindus, known for its hot springs and picturesque surroundings. It houses a Gurdwara and temples dedicated to Lord Shiva and Ramchandra.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Hidimba Devi Temple',
      location: 'Manali',
      description: 'An ancient cave temple dedicated to Hidimba Devi, the wife of Bhima from the Mahabharata. The temple is surrounded by cedar forests and has a unique architecture.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Vashisht Temple',
      location: 'Vashisht Village',
      description: 'Known for its hot springs and beautiful architecture, this temple is dedicated to Sage Vashisht. The village and temple offer stunning views of the surrounding mountains.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
