import Temples from "@/components/Temples";

export default function KinnaurTemples() {
  const district = 'Kinnaur'
  const temples = [
    {
      name: 'Chandika Temple, Kothi',
      location: 'Kothi Village',
      description: 'This temple is dedicated to the goddess Chandika. It is known for its unique architecture and the beautiful wooden carvings that adorn its structure.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Mathi Temple, Chhitkul',
      location: 'Chhitkul Village',
      description: 'Dedicated to the local goddess Mathi, this temple is an important religious site for the people of Chhitkul and the surrounding areas.',
      image: '/images/Mathi-Temple-Chhitkul.png',
      width: 600,
      height: 400
    },
    {
      name: 'Brelengi Gompa',
      location: 'Brelengi',
      description: 'A significant Buddhist monastery built to commemorate the Kalachakra ceremony. It showcases impressive Buddhist art and architecture.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Maheshwar Temple, Sungra',
      location: 'Sungra Village',
      description: 'An ancient temple dedicated to Lord Shiva, known for its intricate woodwork and serene surroundings.',
      image: '',
      width: 600,
      height: 400
    },
    {
      name: 'Durga Temple, Ropa',
      location: 'Ropa Village',
      description: 'This temple is dedicated to Goddess Durga and is known for its spiritual ambiance and the vibrant festivals celebrated here.',
      image: '',
      width: 600,
      height: 400
    },
  ];

  return (
    <Temples district={district} temples={temples} />
  );
}
