import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  public menuItems = [
    {
      path: '/time-voyage',
      iconClass: 'icon-time-voyage',
      label: 'Time voyage',
    },
    { path: '/to-do', iconClass: 'icon-to-do', label: 'To Do' }
  ];
}
