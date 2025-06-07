import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-letters',
  templateUrl: './floating-letters.component.html',
  styleUrl: './floating-letters.component.scss'
})
export class FloatingLettersComponent {
  letters = Array.from({ length: 10 }, (_, i) => this.generateLetter(i));

  generateLetter(index: number) {
    const chars = 'ADELEKESAMUEL';
    return {
      char: chars[Math.floor(Math.random() * chars.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 0.8 + Math.random() * 3,
    };
  }
}
