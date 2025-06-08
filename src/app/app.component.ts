import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sam-portfolio';

  constructor(public router: Router) {}

  shouldShowFooter(): boolean {
    return this.router.url !== '/under-construction';
  }
}
