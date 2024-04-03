import { Component, EventEmitter, Output } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [EventCardComponent, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {

  @Output() eventDetailsEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  openEventDetails(event: any) {
    this.eventDetailsEvent.emit(event)
  }
}
