import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'preferred-theme'

  constructor() { }

  setTheme(theme: 'light' | 'dark') {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(`${theme}-theme`);
    localStorage.setItem(this.themeKey, theme);
  }

  getActiveTheme(): 'light' | 'dark' {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }

  toggleTheme() {
    const isDark = this.getActiveTheme() === 'dark';
    const next = isDark ? 'light' : 'dark';
    this.setTheme(next);
  }

  loadTheme() {
    const savedTheme = localStorage.getItem(this.themeKey) as 'light' | 'dark';
    this.setTheme(savedTheme ?? 'light');
  }
}
