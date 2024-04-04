import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  steps: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  timelineRange: number[] = this.generateTimelineByRangeAndSteps(2000, 2050);

  timeLineList: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(
    this.timelineRange
  );

  constructor() {
    console.log(this.timeLineList.getValue());
  }

  getStep(): Observable<number> {
    return this.steps.asObservable();
  }

  generateTimelineByRangeAndSteps(startYear: number, endYear: number) {
    let timeline: number[] = [];
    for (let i = startYear; i <= endYear; i += this.steps.getValue()) {
      timeline.push(i);
    }
    return timeline;
  }
}
