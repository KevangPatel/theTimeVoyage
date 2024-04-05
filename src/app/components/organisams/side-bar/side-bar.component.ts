import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
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
    { path: '/to-do', iconClass: 'icon-to-do', label: 'To Do' },
  ];

  currentTheme: string = 'dark';

  constructor(private renderer: Renderer2) {
    this.renderer.setAttribute(
      document.documentElement,
      'data-bs-theme',
      this.currentTheme
    );
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.renderer.setAttribute(
      document.documentElement,
      'data-bs-theme',
      this.currentTheme
    );
  }
}
