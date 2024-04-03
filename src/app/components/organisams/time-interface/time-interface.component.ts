import { Component } from '@angular/core';
import { TimelineComponent } from '../../molecules/timeline/timeline.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { CommonModule } from '@angular/common';
import { EventListOverlayComponent } from '../event-list-overlay/event-list-overlay.component';

@Component({
  selector: 'app-time-interface',
  standalone: true,
  imports: [
    TimelineComponent,
    EventDetailsComponent,
    CommonModule,
    EventListOverlayComponent,
  ],
  templateUrl: './time-interface.component.html',
  styleUrl: './time-interface.component.scss',
})
export class TimeInterfaceComponent {
  isEventDetailsOpen: boolean = false;

  constructor() {}

  openEventDetails(eventDetails: any) {
    console.log('called');
    this.isEventDetailsOpen = true;
  }
}
