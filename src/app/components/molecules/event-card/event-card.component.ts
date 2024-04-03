import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {

  @Output() eventDetailsEvent: EventEmitter<any> = new EventEmitter<any>();

  events = [
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

  openEventDetails(event: any) {
    console.log(event)
    this.eventDetailsEvent.emit(event);
  }
}
