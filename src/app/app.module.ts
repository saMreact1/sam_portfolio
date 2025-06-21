import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FloatingLettersComponent } from './shared/floating-letters/floating-letters.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { ToolkitComponent } from './components/toolkit/toolkit.component';
import { JourneyComponent } from './components/journey/journey.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

// Angular MATERIAL
import { MatIconModule } from  '@angular/material/icon';
import { MatTooltipModule } from  '@angular/material/tooltip';
import { MatButtonModule } from  '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    FloatingLettersComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    FeaturedProjectsComponent,
    ToolkitComponent,
    JourneyComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
