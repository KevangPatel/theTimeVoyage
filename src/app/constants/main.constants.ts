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
}

export const mainConstants = new MainConstans();
