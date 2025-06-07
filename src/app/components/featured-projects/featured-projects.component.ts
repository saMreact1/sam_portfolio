import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  projects = [
    {
      img: '/src/assets/img/olohie.png',
      title: 'Olohie Virtual',
      sub: 'A Virtual Assistant Web App.'
    },
    {
      img: '/src/assets/img/healthcare.png',
      title: "Patient's Dashboard",
      sub: "A sleek dashboard that makes it easy to access a every patient's information."
    },
    {
      img: '/src/assets/img/my-manager.png',
      title: 'My Manager',
      sub: 'A modern task management web app that simplifies workflow in an organization.'
    }
  ]
}
