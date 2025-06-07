import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  techStack = [
    { name: 'Angular', icon: '../../../assets/logos/angular.svg' },
    { name: 'TypeScript', icon: '../../../assets/logos/type.svg' },
    { name: 'JavaScript', icon: '../../../assets/logos/js.svg' },
    { name: 'HTML5', icon: '../../../assets/logos/html.svg' },
    { name: 'CSS3', icon: '../../../assets/logos/css.svg' }
  ];

  getIconPosition(index: number, total: number) {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 100; // px
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {
      transform: `translate(${x}px, ${y}px)`
    };
  }
}
