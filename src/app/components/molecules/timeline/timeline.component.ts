import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { CommonModule } from '@angular/common';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [EventCardComponent, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Output() eventDetailsEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() showMoreEvent: EventEmitter<any> = new EventEmitter<any>();

  timelineList: number[] = [];

  constructor(private utilService: UtilService) {}

  ngOnInit() {
    this.utilService.getTimeListList().subscribe((data) => {
      this.timelineList = [...data];
    });
  }

  openEventDetails(event: any) {
    this.eventDetailsEvent.emit(event);
  }

  showMore(eventList: any) {
    this.showMoreEvent.emit(eventList);
  }
}
