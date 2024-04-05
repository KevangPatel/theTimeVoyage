import { IdValue, TimeLineRange } from '../models/mode.interface';

class MainConstans {
  timeLineRange: TimeLineRange[] = [
    { startYear: 1400, endYear: 1499 },
    { startYear: 1500, endYear: 1599 },
    { startYear: 1600, endYear: 1699 },
    { startYear: 1700, endYear: 1799 },
    { startYear: 1800, endYear: 1899 },
    { startYear: 1900, endYear: 1999 },
    { startYear: 2000, endYear: 2099 },
    { startYear: 2100, endYear: 2199 },
    { startYear: 2200, endYear: 2299 },
    { startYear: 2300, endYear: 2399 },
  ];

  rangeList: IdValue[] = [
    { id: 10, value: '10' },
    { id: 20, value: '20' },
    { id: 30, value: '30' },
    { id: 40, value: '40' },
    { id: 5, value: 'Custom' },
  ];

  eventList =[
    {
      id: 2,
      title: 'Revolutionary Founding: The Birth of a Nation',
      date: 1776,
      description: 'Embark on a journey to witness the revolutionary founding of nations, marking the dawn of a new era.',
      image: 'https://via.placeholder.com/150?text=Event+1',
      video: 'https://www.youtube.com/watch?v=1'
    },
    {
      id: 3,
      title: 'The Fall of the Iron Curtain: Uniting East and West',
      date: 2020,
      description: 'Experience the monumental event of the fall of the Iron Curtain, symbolizing the unity of divergent ideologies.',
      image: 'https://scontent.fstv15-1.fna.fbcdn.net/v/t39.30808-6/292871623_429698909171797_1573995425692839956_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wWUgcV8KmUgAb5BuZZm&_nc_ht=scontent.fstv15-1.fna&oh=00_AfCtFIuhkmRJLksWbSEH3jzY5wv9alM-V9i1U00D4UMj7g&oe=66156F2B',
      video: 'https://www.youtube.com/watch?v=1'
    },
    {
      id: 4,
      title: 'Technological Renaissance: The Digital Revolution',
      date: 2000,
      description: 'Dive into the technological renaissance that reshaped society, connecting the world in unprecedented ways.',
      image: 'http://surl.li/sgxta',
      video: 'https://www.youtube.com/watch?v=1'
    },
    {
      id: 5,
      title: 'Exploring the Age of Enlightenment: Ideas That Shaped History',
      date: 2020,
      description: 'Explore the enlightenment era, a period of intellectual awakening that laid the groundwork for modern civilization.',
      image: 'http://surl.li/sgxus',
      video: 'https://www.youtube.com/watch?v=1'
    },
    {
      id: 34,
      title: 'Space Exploration: Journey to the Unknown',
      date: 2020,
      description: 'Journey into the cosmos and witness humanity\'s quest to explore the mysteries of space.',
      image: 'https://cineuropa.org/Galleries/313/160/poster1_en_big.jpg?1469801823790',
      video: 'https://www.youtube.com/watch?v=1'
    },
    {
      id: 53,
      title: 'Industrial Evolution: Transforming the World',
      date: 2020,
      description: 'Witness the industrial evolution that propelled humanity into a new age of innovation and progress.',
      image: 'https://via.placeholder.com/150?text=Event+6',
      video: 'https://www.youtube.com/watch?v=1'
    },
    {
      id: 6,
      title: 'The Renaissance: Rebirth of Art, Culture, and Knowledge',
      date: 2005,
      description: 'Immerse yourself in the cultural rebirth of the Renaissance, a flourishing period of art, literature, and science.',
      image: 'https://cdn.theplaylist.net/wp-content/uploads/2016/09/15020820/voyage-of-time-still-750x400.jpg',
      video: 'https://www.youtube.com/watch?v=1'
    },
    {
      id: 7,
      title: 'Colonizing New Frontiers: Pioneers of Discovery',
      date: 2015,
      description: 'Follow the footsteps of pioneers as they embark on daring expeditions to colonize new frontiers.',
      image: 'https://image.agentm.tw/images/movie/ea2f71916e01462225b74bdcd247de5b118c1d3ccd592db6bda19c6bebce8fec/photo/image/fx_0002.jpg',
      video: 'https://www.youtube.com/watch?v=1'
    },
    {
      id: 8,
      title: 'Era of Exploration: Charting New Waters',
      date: 2015,
      description: 'Chart the course of exploration through uncharted waters, uncovering new lands and civilizations.',
      image: 'https://static01.nyt.com/images/2016/10/06/arts/voyage-image1/voyage-image1-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      video: 'https://www.youtube.com/watch?v=1'
    }
  ]
  
}

export const mainConstants = new MainConstans();
