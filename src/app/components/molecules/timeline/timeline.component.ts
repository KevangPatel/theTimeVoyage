import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { CommonModule } from '@angular/common';
import { UtilService } from '../../../services/util.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [EventCardComponent, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  animations: [
    trigger('scaleInOut', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('2s ease-in', style({ transform: 'scale(0.8)', opacity: 0 }))
      ])
    ])
  ]
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
