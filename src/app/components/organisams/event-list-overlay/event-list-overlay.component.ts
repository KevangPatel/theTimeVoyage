import { Component } from '@angular/core';
import { TimelineComponent } from '../../molecules/timeline/timeline.component';
import { EventCardComponent } from '../../molecules/event-card/event-card.component';

@Component({
  selector: 'app-event-list-overlay',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './event-list-overlay.component.html',
  styleUrl: './event-list-overlay.component.scss'
})
export class EventListOverlayComponent {

}
