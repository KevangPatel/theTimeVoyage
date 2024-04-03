import { Component } from '@angular/core';
import { TimelineComponent } from '../../molecules/timeline/timeline.component';

@Component({
  selector: 'app-time-interface',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './time-interface.component.html',
  styleUrl: './time-interface.component.scss'
})
export class TimeInterfaceComponent {

}
