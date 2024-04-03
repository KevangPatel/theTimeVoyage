import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {

  @Output () closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal(){
    this.closeEvent.emit(false)
  }

}
