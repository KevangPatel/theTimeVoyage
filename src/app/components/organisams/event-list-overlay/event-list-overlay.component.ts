import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { EventCardComponent } from '../../molecules/event-card/event-card.component';

@Component({
  selector: 'app-event-list-overlay',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './event-list-overlay.component.html',
  styleUrl: './event-list-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListOverlayComponent {
  @Input() eventList: any[];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes,this.eventList);
  }
}
