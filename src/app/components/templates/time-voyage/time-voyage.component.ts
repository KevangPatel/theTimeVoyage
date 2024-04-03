import { Component } from '@angular/core';
import { HeaderComponent } from '../../organisams/header/header.component';
import { TimeInterfaceComponent } from '../../organisams/time-interface/time-interface.component';

@Component({
  selector: 'app-time-voyage',
  standalone: true,
  imports: [HeaderComponent,TimeInterfaceComponent],
  templateUrl: './time-voyage.component.html',
  styleUrl: './time-voyage.component.scss'
})
export class TimeVoyageComponent {

}
