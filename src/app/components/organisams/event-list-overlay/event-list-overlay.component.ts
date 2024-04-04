import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { EventCardComponent } from '../../molecules/event-card/event-card.component';
import { UtilService } from '../../../services/util.service';

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

  title: number;

  constructor(private utilService: UtilService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, this.eventList);
    this.title = this.eventList.length && this.eventList[0].date;
  }

  closeOverlay() {
    this.utilService.closeShowMorePopUp.next(false);
  }
}
