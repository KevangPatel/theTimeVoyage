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

  eventList = [
    {
      id: 2,
      title: 'Declaration of Independence',
      date: 1776,
      description:
        'The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.',
      image: '../../../assets/images/event2.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 3,
      title: 'Fall of the Berlin Wall',
      date: 2020,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },

    {
      id: 4,
      title: 'Fall of the Berlin Wall',
      date: 2000,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 5,
      title: 'Fall of the Berlin Wall',
      date: 2020,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 34,
      title: 'Fall ',
      date: 2020,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 53,
      title: 'UPl',
      date: 2020,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 6,
      title: 'Fall of the Berlin Wall',
      date: 2005,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 7,
      title: 'Fall of the Berlin Wall',
      date: 2015,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 8,
      title: 'Fall of the Berlin Wall',
      date: 2015,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
  ];
}

export const mainConstants = new MainConstans();
