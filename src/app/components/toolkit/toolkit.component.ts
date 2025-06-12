import { Component } from '@angular/core';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrl: './toolkit.component.scss'
})
export class ToolkitComponent {
  stacks = [
    {
      icon: '../../../assets/logos/angular.svg',
      name: 'Angular',
      exp: '1+ years',
      level: 70
    },
    {
      icon: '../../../assets/logos/type.svg',
      name: 'TypeScript',
      exp: '1+ years',
      level: 60
    },
    {
      icon: '../../../assets/logos/html.svg',
      name: 'HTML5',
      exp: '3+ years',
      level: 95
    },
    {
      icon: '../../../assets/logos/css.svg',
      name: 'CSS3',
      exp: '3+ years',
      level: 95
    },
    {
      icon: '../../../assets/logos/js.svg',
      name: 'JavaScript',
      exp: '2+ years',
      level: 70
    }
  ]

  tools = [
    {
      icon: '../../../assets/icons/vs.svg',
      name: 'Virtual Studio Code',
      exp: '4+ years',
      level: 90
    },
    {
      icon: '../../../assets/icons/git.svg',
      name: 'Git',
      exp: '3+ years',
      level: 85
    },
    {
      icon: '../../../assets/logos/render.png',
      name: 'Render',
      exp: '1+ years',
      level: 50
    },
    {
      icon: '../../../assets/icons/netify.svg',
      name: 'Netlify',
      exp: '3+ years',
      level: 75
    }
  ]

  testing = [
    {
      icon: '../../../assets/icons/postman.svg',
      name: 'Postman',
      exp: '2+ years',
      level: 60
    },
    {
      icon: '../../../assets/icons/swagger.svg',
      name: 'Swagger',
      exp: '1+ year',
      level: 50
    }
  ]
}
