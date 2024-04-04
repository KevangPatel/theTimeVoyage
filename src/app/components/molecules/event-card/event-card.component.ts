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

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() year: number;
  @Input() timelineList: number[];
  @Output() eventDetailsEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private utilService: UtilService) {}

  events: any = [
    // {
    //   id: 1,
    //   title: 'The Renaissance Begins',
    //   date: '14th Century',
    //   description:
    //     'The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.',
    //   image: '../../../assets/images/event1.jpg',
    //   video: 'https://www.youtube.com/watch?v=1',
    // },
    {
      id: 2,
      title: 'Declaration of Independence',
      date: 1776,
      description:
        'The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.',
      image: '../../../assets/images/event2.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 3,
      title: 'Fall of the Berlin Wall',
      date: 2020,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },

    {
      id: 4,
      title: 'Fall of the Berlin Wall',
      date: 2000,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 5,
      title: 'Fall of the Berlin Wall',
      date: 2020,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 6,
      title: 'Fall of the Berlin Wall',
      date: 2005,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 7,
      title: 'Fall of the Berlin Wall',
      date: 2015,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: 8,
      title: 'Fall of the Berlin Wall',
      date: 2015,
      description:
        'The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.',
      image: '../../../assets/images/event3.jpg',
      video: 'https://www.youtube.com/watch?v=1',
    },
  ];
  tempEvents: any[] = [];
  yearPresentInBetweenTheTimeline: any[] = [];

  findEventBetweenYears() {
    this.utilService.getStep().subscribe((data) => {
      // this.timelineList.forEach((element: any) => {
      this.tempEvents.forEach((event: any) => {
        const endYear = this.year + data;
        if (this.year < event.date && event.date < endYear) {
          event.isEventExist = true;
          this.yearPresentInBetweenTheTimeline.push(event);
        }
      });
      // });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.tempEvents=[...this.events];
    console.log(this.year);
    this.findEventBetweenYears();
    console.log(this.yearPresentInBetweenTheTimeline);
    this.events = this.events.filter((x: any) => x.date == this.year);
  }

  ngOnInit() {
  }

  openEventDetails(event: any) {
    console.log(event);
    this.eventDetailsEvent.emit(event);
  }
}
