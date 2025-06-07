import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  techs = [
    { name: 'Angular', icon: 'assets/logos/angular.svg' },
    { name: 'TypeScript', icon: 'assets/logos/type.svg' },
    { name: 'JavaScript', icon: 'assets/logos/js.svg' },
    { name: 'HTML5', icon: 'assets/logos/html.svg' },
    { name: 'CSS3', icon: 'assets/logos/css.svg' }
  ];

  ngOnInit(): void {
    // setInterval(() => {
    //   this.techs = [...this.techs.slice(1), this.techs[0]];
    // }, 3000);
  }

  getIconPosition(index: number, total: number) {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 200; // px
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {
      transform: `translate(${x}px, ${y}px)`
    };
  }
}
