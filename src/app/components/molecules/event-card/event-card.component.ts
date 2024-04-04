import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './event-card.component.scss',
  providers: [ApiService],
})
export class EventCardComponent {
  @Input() year: number;
  @Input() timelineList: number[];
  @Input() showMoreEventList: any;
  @Output() eventDetailsEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() showMoreEvent: EventEmitter<any> = new EventEmitter<any>();

  events: any = [];
  tempEvents: any[] = [];
  yearPresentInBetweenTheTimeline: any[] = [];
  initialTempEvents: any[] = [];
  constructor(
    private utilService: UtilService,
    private apiService: ApiService
  ) {}

  findEventBetweenYears() {
    this.utilService.getStep().subscribe((data) => {
      this.tempEvents.forEach((event: any) => {
        const endYear = this.year + data;
        if (this.year < event.date && event.date < endYear) {
          event.isEventExist = true;
          this.yearPresentInBetweenTheTimeline.push(event);
        }
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.tempEvents = [];
    this.events = [];
    this.yearPresentInBetweenTheTimeline = [];
    this.apiService.getAllEvents().subscribe((data) => {
      this.events = [...data];
    });
    this.tempEvents = [...this.events];
    this.findEventBetweenYears();
    // console.log(this.initialTempEvents);
    this.events = this.events.filter((x: any) => x.date == this.year);
    this.initialTempEvents = [...this.events];
    this.events.length > 3 && this.events.splice(3);
    if (this.showMoreEventList) {
      this.events = [...this.showMoreEventList];
    }
  }

  showMore() {
    this.showMoreEvent.emit(this.initialTempEvents);
  }

  openEventDetails(event: any) {
    this.eventDetailsEvent.emit(event);
  }
}
