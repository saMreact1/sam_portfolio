import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isNavOpen: boolean = false;
  isDarkMode: boolean = true;
  isSpinning: boolean = false;
  tooltipText: string = 'Toggle Dark Mode';
  maskCx = 40;
  maskCy = 0;
  maskR = 15;
  raysOpacity = 1;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isNavOpen = false; // Close the menu on route change
      }
    });

    this.isDarkMode = this.themeService.getActiveTheme() === 'dark';
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen
  }

  toggleTheme() {
    this.isSpinning = true;
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setTheme(this.isDarkMode ? 'dark' : 'light');

    setTimeout(() => {
      this.isSpinning = false;
      this.closeMenu()
    }, 500);
  }

  closeMenu() {
    this.isNavOpen = false;
  }
}
