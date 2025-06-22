import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sam-portfolio';

  constructor(
    public router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.themeService.loadTheme();
  }

  shouldShowFooter(): boolean {
    return this.router.url !== '/under-construction';
  }
}
