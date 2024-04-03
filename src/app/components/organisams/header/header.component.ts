import { Component } from '@angular/core';
import { SearchBarComponent } from '../../atoms/search-bar/search-bar.component';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
