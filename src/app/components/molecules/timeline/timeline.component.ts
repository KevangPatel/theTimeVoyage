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
  timelineList: number[] = [];
  eventList: any[] = [
    {
      id: 1,
      title: 'The Renaissance Begins',
      date: '14th Century',
      description:
        'The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.',
      image: '../../../assets/images/event1.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 2,
      title: 'Declaration of Independence',
      date: '1776',
      description:
        'The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.',
      image: '../../../assets/images/event2.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 3,
      title: 'Fall of the Berlin Wall',
      date: '1989',
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
  ];

  constructor(private utilService: UtilService) {}

  ngOnInit() {
 
    this.utilService.getTimeListList().subscribe((data) => {
      this.timelineList = [...data];
    });
  }

  openEventDetails(event: any) {
    this.eventDetailsEvent.emit(event);
    // e.stopPropagation()
  }
}
