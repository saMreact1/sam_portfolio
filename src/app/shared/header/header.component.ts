import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavOpen: boolean = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen
  }
}
