import { Component } from '@angular/core';
import { TimelineComponent } from '../../molecules/timeline/timeline.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { CommonModule } from '@angular/common';
import { EventListOverlayComponent } from '../event-list-overlay/event-list-overlay.component';
import { UtilService } from '../../../services/util.service';

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
  isShowMore: boolean = false;
  eventList: any = [];

  constructor(private utilService: UtilService) {}

  ngOnInit() {
    this.utilService.closeShowMorePopUp.subscribe((res) => {
      this.isShowMore = res;
    });
  }

  openEventDetails() {
    this.isEventDetailsOpen = true;
  }

  showMore(eventList: any) {
    this.eventList = [...eventList];
    this.isShowMore = true;
  }
}
