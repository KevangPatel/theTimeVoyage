import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  steps: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  timelineRange: number[] = this.generateTimelineByRangeAndSteps(2000, 2099);

  timeLineList: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(
    this.timelineRange
  );

  closeShowMorePopUp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  getStep(): Observable<number> {
    return this.steps.asObservable();
  }

  getTimeListList(): Observable<number[]> {
    return this.timeLineList.asObservable();
  }

  generateTimelineByRangeAndSteps(startYear: number, endYear: number) {
    let timeline: number[] = [];
    for (let i = startYear; i <= endYear; i += this.steps.getValue()) {
      timeline.push(i);
    }
    timeline.push(endYear);
    return timeline;
  }

  increaseOrdecreaseRange() {
    let timeline = this.timeLineList.getValue();
    if (timeline.length > 10) {
      timeline.pop();
    } else {
      timeline.push(timeline[timeline.length - 1] + 1);
    }
    this.timeLineList.next(timeline);
  }
}
