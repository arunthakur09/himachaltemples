export interface Temple {
  name: string;
  location: string;
  description: string;
  image: string;
}

export interface District {
  slug: string;
  name: string;
  displayName: string;
  description: string;
  image: string;
  temples: Temple[];
}

export const districts: District[] = [
  {
    slug: 'Bilaspur',
    name: 'Bilaspur',
    displayName: 'Bilaspur',
    description: 'Known for Gobind Sagar Lake and the iconic Naina Devi Temple perched on a hilltop.',
    image: '/images/Bilaspur/naina-devi-bilaspur.jpg',
    temples: [
      {
        name: 'Shri Naina Devi Ji Temple',
        location: 'Naina Devi Hill',
        description: 'One of the most famous temples in Himachal Pradesh, dedicated to Goddess Naina Devi. Perched on a hilltop with panoramic views of Gobind Sagar Lake.',
        image: '/images/Bilaspur/naina-devi-bilaspur.jpg',
      },
      {
        name: 'Laxmi Narayan Mandir',
        location: 'Bilaspur Town',
        description: 'A beautiful temple dedicated to Lord Vishnu, known for its serene environment and intricate architecture.',
        image: '',
      },
      {
        name: 'Kandrour Bridge Temple',
        location: 'Kandrour',
        description: 'Located near the famous Kandrour Bridge, this temple is a serene spot offering peace and tranquility to its visitors.',
        image: '',
      },
      {
        name: 'Shri Rukmani Kund Mandir',
        location: 'Ghagus',
        description: "A lesser-known yet beautiful temple dedicated to Rukmani, the consort of Lord Krishna. Known for its peaceful ambiance and scenic location.",
        image: '',
      },
      {
        name: 'Baba Nahar Singh Temple',
        location: 'Dholra',
        description: "A temple dedicated to Baba Nahar Singh, also known as the 'Fauji Baba'. A popular spiritual site among the locals, known for its vibrant festivals.",
        image: '',
      },
    ],
  },
  {
    slug: 'Chamba',
    name: 'Chamba',
    displayName: 'Chamba',
    description: 'Famous for ancient temples and rich cultural heritage set in a beautiful valley amid snow-capped peaks.',
    image: '/images/Chamba/laxmi-narayan-chamba.png',
    temples: [
      {
        name: 'Laxmi Narayan Temple',
        location: 'Chamba Town',
        description: 'One of the oldest and most revered temples in Chamba, dedicated to Lord Vishnu. Known for its exquisite Shikhara architecture and serene surroundings.',
        image: '/images/Chamba/laxmi-narayan-chamba.png',
      },
      {
        name: 'Chamunda Devi Temple',
        location: 'Chamba Town',
        description: 'Perched on a hilltop, this temple is dedicated to Goddess Chamunda. It offers stunning views of the Chamba Valley and is an important religious site.',
        image: '',
      },
      {
        name: 'Bhuri Singh Museum Temple',
        location: 'Chamba Town',
        description: 'Houses a beautiful temple dedicated to Lord Shiva within its premises. Named after Raja Bhuri Singh, it showcases the rich cultural heritage of Chamba.',
        image: '',
      },
      {
        name: 'Banni Mata Temple',
        location: 'Banni Village',
        description: 'Located in the picturesque Banni village, this temple is dedicated to Goddess Kali. Known for its vibrant festivals and breathtaking views.',
        image: '',
      },
      {
        name: 'Hari Rai Temple',
        location: 'Chamba Town',
        description: 'An ancient temple dedicated to Lord Vishnu, renowned for its beautiful bronze idol of Chaturmurti (four-faced) Vishnu and fine architectural craftsmanship.',
        image: '',
      },
    ],
  },
  {
    slug: 'Hamirpur',
    name: 'Hamirpur',
    displayName: 'Hamirpur',
    description: 'Known for its educational institutions, scenic beauty, and the revered Baba Balak Nath temple.',
    image: '/images/Hamirpur/gasota_hamirpur.png',
    temples: [
      {
        name: 'Deotsidh Baba Balak Nath Temple',
        location: 'Deotsidh Hill',
        description: 'A famous temple dedicated to Baba Balak Nath, attracting numerous devotees especially during the Navratras. Carved into the side of a mountain cave.',
        image: '/images/Hamirpur/balaknath-hamirpur.png',
      },
      {
        name: 'Gasota Mahadev Temple',
        location: 'Gasota Village',
        description: 'An ancient temple dedicated to Lord Shiva, known for its spiritual ambiance and scenic surroundings in the heart of Hamirpur district.',
        image: '/images/Hamirpur/gasota_hamirpur.png',
      },
      {
        name: 'Narvadeshwar Temple',
        location: 'Sujanpur Tira',
        description: 'Built by Maharani Prasanna Devi, this temple is renowned for its beautiful architecture and elaborate wall paintings depicting epics.',
        image: '/images/Hamirpur/Narbadeshwar_Temple.jpg',
      },
      {
        name: 'Tauni Devi Temple',
        location: 'Tauni Devi Village',
        description: 'A significant religious site dedicated to Goddess Tauni, offering a serene environment in the hills of Hamirpur.',
        image: '/images/Hamirpur/tauni-hamirpur.png',
      },
      {
        name: 'Murli Manohar Mandir',
        location: 'Sujanpur Tira',
        description: 'Dedicated to Lord Krishna, this temple is known for its historical importance, religious significance, and vibrant festivals.',
        image: '/images/Hamirpur/Murali-sujanpur.png',
      },
    ],
  },
  {
    slug: 'Kangra',
    name: 'Kangra',
    displayName: 'Kangra',
    description: 'One of the most populous districts, famed for its ancient temples, Kangra Fort, and lush Dhauladhar landscapes.',
    image: '/images/Kangra/chamunda-temple-kangra.png',
    temples: [
      {
        name: 'Bajreshwari Devi Temple',
        location: 'Kangra Town',
        description: 'One of the most revered temples dedicated to Goddess Bajreshwari, known for its historic significance and architectural beauty in Kangra town.',
        image: '',
      },
      {
        name: 'Chamunda Devi Temple',
        location: 'Chamunda',
        description: 'Dedicated to Goddess Chamunda, this temple is situated on the banks of the Baner River and is known for its spiritual ambiance and scenic surroundings.',
        image: '/images/Kangra/chamunda-temple-kangra.png',
      },
      {
        name: 'Jwalamukhi Temple',
        location: 'Jwalamukhi Town',
        description: 'Famous for its eternal flame that burns without any fuel, this temple is dedicated to Goddess Jwalamukhi and is one of the 51 Shakti Peethas.',
        image: '',
      },
      {
        name: 'Masroor Rock Cut Temple',
        location: 'Masroor',
        description: 'An ancient temple complex carved out of a single rock, known for its elaborate rock carvings and stunning architecture, dedicated to Lord Shiva.',
        image: '',
      },
      {
        name: 'Baglamukhi Temple',
        location: 'Bankhandi',
        description: 'Dedicated to Goddess Baglamukhi, this temple is a significant pilgrimage site believed to grant victory over enemies and protection from evil.',
        image: '',
      },
    ],
  },
  {
    slug: 'Kinnaur',
    name: 'Kinnaur',
    displayName: 'Kinnaur',
    description: 'Famous for apple orchards, the Kinnaur Kailash mountain, and ancient temples with unique Tibeto-Buddhist architecture.',
    image: '/images/Kinnaur/Mathi-Temple-Chhitkul.png',
    temples: [
      {
        name: 'Chandika Temple, Kothi',
        location: 'Kothi Village',
        description: 'Dedicated to Goddess Chandika, this temple is known for its unique architecture and the beautiful wooden carvings that adorn its structure.',
        image: '',
      },
      {
        name: 'Mathi Temple, Chhitkul',
        location: 'Chhitkul Village',
        description: 'Dedicated to the local goddess Mathi, this temple is an important religious site for the people of Chhitkul and surrounding areas near the Indo-Tibet border.',
        image: '/images/Kinnaur/Mathi-Temple-Chhitkul.png',
      },
      {
        name: 'Brelengi Gompa',
        location: 'Brelengi',
        description: 'A significant Buddhist monastery built to commemorate the Kalachakra ceremony. It showcases impressive Buddhist art and architecture.',
        image: '',
      },
      {
        name: 'Maheshwar Temple, Sungra',
        location: 'Sungra Village',
        description: 'An ancient temple dedicated to Lord Shiva, known for its intricate woodwork and serene surroundings in the Baspa Valley.',
        image: '',
      },
      {
        name: 'Durga Temple, Ropa',
        location: 'Ropa Village',
        description: 'Dedicated to Goddess Durga, this temple is known for its spiritual ambiance and the vibrant festivals celebrated here.',
        image: '',
      },
    ],
  },
  {
    slug: 'Kullu',
    name: 'Kullu',
    displayName: 'Kullu',
    description: 'Renowned for its beautiful valleys, adventure sports, and the world-famous Kullu Dussehra festival.',
    image: '/images/Kullu/Bijli_Mahadev_Temple.jpg',
    temples: [
      {
        name: 'Bijli Mahadev Temple',
        location: 'Kullu Valley',
        description: 'A renowned temple dedicated to Lord Shiva, known for its high altitude and scenic views. Famous for its 60-foot tall staff that attracts lightning as a divine blessing.',
        image: '/images/Kullu/Bijli_Mahadev_Temple.jpg',
      },
      {
        name: 'Raghunath Temple',
        location: 'Kullu Town',
        description: 'One of the most famous temples in Kullu, dedicated to Lord Raghunath (Lord Rama). It plays a central role during the Kullu Dussehra festival.',
        image: '',
      },
      {
        name: 'Manikaran Sahib',
        location: 'Parvati Valley',
        description: 'A sacred site for both Sikhs and Hindus, known for its hot springs and picturesque surroundings. Houses a Gurdwara and temples dedicated to Lord Shiva.',
        image: '',
      },
      {
        name: 'Hidimba Devi Temple',
        location: 'Manali',
        description: 'An ancient cave temple dedicated to Hidimba Devi, the wife of Bhima from the Mahabharata. Surrounded by cedar forests with unique pagoda-style architecture.',
        image: '',
      },
      {
        name: 'Vashisht Temple',
        location: 'Vashisht Village',
        description: 'Known for its hot springs and beautiful architecture, this temple is dedicated to Sage Vashisht with stunning views of the surrounding Himalayan peaks.',
        image: '',
      },
    ],
  },
  {
    slug: 'Lahaul_Spiti',
    name: 'Lahaul & Spiti',
    displayName: 'Lahaul & Spiti',
    description: 'Known for rugged terrain, Buddhist monasteries, and some of the highest inhabited places on Earth.',
    image: '/images/Lahaul_Spiti/Key_Monastery.jpg',
    temples: [
      {
        name: 'Key Monastery',
        location: 'Spiti Valley',
        description: 'A stunning Tibetan Buddhist monastery located on a picturesque hilltop at 4,166 m, known for its beautiful murals, ancient scriptures, and dramatic mountain backdrop.',
        image: '/images/Lahaul_Spiti/Key_Monastery.jpg',
      },
      {
        name: 'Tabo Monastery',
        location: 'Tabo Village',
        description: 'One of the oldest monasteries in the Himalayas (founded 996 AD), famous for its exquisite wall paintings and ancient Buddhist scriptures.',
        image: '',
      },
      {
        name: 'Dhankar Monastery',
        location: 'Dhankar Village',
        description: 'Perched dramatically on a cliff, this monastery offers breathtaking views of the confluence of the Spiti and Pin rivers. Known for historical significance and frescoes.',
        image: '',
      },
      {
        name: 'Gue Monastery',
        location: 'Gue Village',
        description: 'Known for housing a naturally mummified monk, this monastery is unique and attracts many visitors for its intriguing history and serene mountain surroundings.',
        image: '',
      },
      {
        name: 'Komic Monastery',
        location: 'Komic Village',
        description: 'Situated in one of the highest motorable villages in the world, this monastery is known for its ancient murals, statues, and peaceful high-altitude environment.',
        image: '',
      },
    ],
  },
  {
    slug: 'Mandi',
    name: 'Mandi',
    displayName: 'Mandi',
    description: 'Known as the "Varanasi of Hills" for its 81 stone temples and the annual Shivratri International Festival.',
    image: '/images/Mandi/Bhima-Kaali-mandi.png',
    temples: [
      {
        name: 'Bhima Kali Temple',
        location: 'Sarahan Village',
        description: 'A temple dedicated to Goddess Bhimakali, known for its intricate wood carvings and the stunning Himalayan backdrop that frames this ancient shrine.',
        image: '/images/Mandi/Bhima-Kaali-mandi.png',
      },
      {
        name: 'Prashar Lake Temple',
        location: 'Near Prashar Lake',
        description: 'Dedicated to Sage Prashar, featuring unique three-storied pagoda-style architecture and panoramic views of the Dhauladhar mountain range.',
        image: '',
      },
      {
        name: 'Tarna Temple',
        location: 'Tarna Hill',
        description: 'Also known as Shyama Kali Temple, it offers breathtaking views of Mandi town and the Beas River flowing through the valley below.',
        image: '',
      },
      {
        name: 'Triloknath Temple',
        location: 'Mandi Town',
        description: 'Dedicated to Lord Shiva, this temple is known for its stunning Shikhara architecture and ancient heritage in the heart of Mandi.',
        image: '',
      },
      {
        name: 'Bhootnath Temple',
        location: 'Mandi Town',
        description: 'Famous for hosting the Maha Shivaratri International Fair, this temple dedicated to Lord Shiva attracts thousands of devotees every year.',
        image: '',
      },
    ],
  },
  {
    slug: 'Shimla',
    name: 'Shimla',
    displayName: 'Shimla',
    description: 'The capital of Himachal Pradesh, blending Victorian architecture with scenic Himalayan temples on rolling ridges.',
    image: '/images/Shimla/Jaakho_shimla.png',
    temples: [
      {
        name: 'Jakhoo Temple',
        location: 'Jakhoo Hill',
        description: 'Dedicated to Lord Hanuman, this temple is situated on the highest peak in Shimla, offering stunning views of the surrounding Himalayan ranges.',
        image: '/images/Shimla/Jaakho_shimla.png',
      },
      {
        name: 'Kali Bari Temple',
        location: 'Shimla Town',
        description: 'Built in 1845, this temple is dedicated to Goddess Kali and is one of the most famous temples in Shimla, known for its beautiful architecture and serene environment.',
        image: '',
      },
      {
        name: 'Tara Devi Temple',
        location: 'Tara Devi Hill',
        description: 'Located on Tara Devi hill, this temple offers a peaceful retreat with panoramic views of the Himalayas and is dedicated to Goddess Tara.',
        image: '',
      },
      {
        name: 'Sankat Mochan Temple',
        location: 'Shimla Town',
        description: 'Dedicated to Lord Hanuman, this temple is known for its tranquil atmosphere and beautiful surroundings, making it popular with both locals and tourists.',
        image: '',
      },
      {
        name: 'Shri Hanuman Mandir Jakhoo',
        location: 'Jakhoo Hill',
        description: 'Features a giant 33-meter statue of Hanuman, one of the tallest in the world, making it a landmark attraction and spiritual site in Shimla.',
        image: '',
      },
    ],
  },
  {
    slug: 'Sirmaur',
    name: 'Sirmaur',
    displayName: 'Sirmaur',
    description: 'Known for serene landscapes, the sacred Renuka Lake, and the highest outer-Himalayan peak, Churdhar.',
    image: '/images/Sirmaur/Churdhar-Sirmaur.png',
    temples: [
      {
        name: 'Renuka Ji Temple',
        location: 'Renuka Ji',
        description: 'Located on the banks of Renuka Lake, this temple is dedicated to Goddess Renuka. Surrounded by beautiful landscapes, it is a major pilgrimage site.',
        image: '',
      },
      {
        name: 'Churdhar Temple',
        location: 'Churdhar Peak',
        description: 'Situated at the highest peak in the outer Himalayas (3,647 m), this temple dedicated to Lord Shirgul offers breathtaking views and a challenging trek.',
        image: '/images/Sirmaur/Churdhar-Sirmaur.png',
      },
      {
        name: 'Bala Sundari Temple',
        location: 'Trilokpur',
        description: 'Dedicated to Goddess Bala Sundari, this temple is an important religious site attracting thousands of devotees especially during the Navratri festival.',
        image: '',
      },
      {
        name: 'Mahasu Devta Temple',
        location: 'Hanol',
        description: 'An ancient temple dedicated to Lord Mahasu, known for its unique wooden architecture and spiritual significance as a prominent religious site in the region.',
        image: '',
      },
      {
        name: 'Guga Temple',
        location: 'Sirmaur',
        description: 'Dedicated to Guga, a folk deity worshiped in Himachal Pradesh, this temple is known for its local cultural importance and vibrant annual fair.',
        image: '',
      },
    ],
  },
  {
    slug: 'Solan',
    name: 'Solan',
    displayName: 'Solan',
    description: 'Known as the "Mushroom City of India", Solan is also home to the tallest Shiva temple in Asia.',
    image: '/images/Solan/Jatoli-solan.png',
    temples: [
      {
        name: 'Shoolini Mata Temple',
        location: 'Solan Town',
        description: 'One of the most revered temples in Solan, dedicated to Shoolini Mata, the presiding deity of the region. Known for its vibrant annual Shoolini Fair.',
        image: '',
      },
      {
        name: 'Jatoli Shiv Temple',
        location: 'Jatoli',
        description: 'Famous for its architectural beauty and spiritual significance, this temple dedicated to Lord Shiva is considered one of the tallest temples in Asia at 111 feet.',
        image: '/images/Solan/Jatoli-solan.png',
      },
      {
        name: 'Mohan Shakti National Heritage Park',
        location: 'Solan',
        description: 'A grand temple complex and heritage park showcasing Indian culture and spirituality with impressive sculptures and a serene environment.',
        image: '',
      },
      {
        name: 'Kali Mata Temple',
        location: 'Solan Town',
        description: 'Dedicated to Goddess Kali, this temple is known for its peaceful surroundings and is a popular spot for both devotees and tourists.',
        image: '',
      },
      {
        name: 'Bon Monastery',
        location: 'Dolanji',
        description: 'A prominent Bon monastery, known for its tranquil ambiance and beautiful architecture. It is an important center for the ancient Bon religion of Tibet.',
        image: '',
      },
    ],
  },
  {
    slug: 'Una',
    name: 'Una',
    displayName: 'Una',
    description: 'Home to the powerful Shakti Peetha of Chintpurni Mata, drawing millions of devotees throughout the year.',
    image: '/images/Una/Chintpurani-una.png',
    temples: [
      {
        name: 'Chintpurni Temple',
        location: 'Chintpurni',
        description: 'One of the most revered Shakti Peethas, dedicated to Goddess Chintpurni who is believed to fulfill the wishes of her devotees. Draws millions annually.',
        image: '/images/Una/Chintpurani-una.png',
      },
      {
        name: 'Shri Radha Krishna Temple',
        location: 'Una Town',
        description: 'This temple is dedicated to Lord Krishna and Radha, known for its serene environment and beautiful architecture in Una town.',
        image: '',
      },
      {
        name: 'Dera Baba Barbhag Singh',
        location: 'Nangal Shaheedan',
        description: 'A revered religious site dedicated to Baba Barbhag Singh, known for its spiritual ambiance and the annual fair that attracts thousands of devotees.',
        image: '',
      },
      {
        name: 'Shivbari Temple',
        location: 'Gagret',
        description: 'Dedicated to Lord Shiva, this temple is known for its ancient significance and peaceful surroundings, attracting many devotees from across the region.',
        image: '',
      },
      {
        name: 'Bangana Laxmi Narayan Temple',
        location: 'Bangana',
        description: 'A beautiful temple dedicated to Lord Vishnu, located in Bangana. Known for its serene environment and vibrant festivals throughout the year.',
        image: '',
      },
    ],
  },
];

export function getDistrict(slug: string): District | null {
  return districts.find((d) => d.slug === slug) ?? null;
}

export function getAllDistrictSlugs(): string[] {
  return districts.map((d) => d.slug);
}
