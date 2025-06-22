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
    this.updateIcon();
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setTheme(this.isDarkMode ? 'dark' : 'light');
    this.updateIcon();
  }

  private updateIcon() {
    if(this.isDarkMode) {
      // Morph into moon
      this.maskCx = 40;
      this.maskCy = 0;
      this.maskR = 15;
      this.raysOpacity = 0;
      this.tooltipText = 'Toggle Light Mode';
    } else {
      // Morph into sun
      this.maskCx = 0;
      this.maskCy = 0;
      this.maskR = 0;
      this.raysOpacity = 1;
      this.tooltipText = 'Toggle Dark Mode';
    }
  }

  closeMenu() {
    this.isNavOpen = false;
  }
}
