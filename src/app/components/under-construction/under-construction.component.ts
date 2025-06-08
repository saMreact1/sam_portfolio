import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.scss'
})
export class UnderConstructionComponent {
  isSoundPlaying = false;
  audio = new Audio('../../../assets/sounds/construction-work-26897.mp3'); // Add your sound file here

  toggleSound() {
    this.isSoundPlaying ? this.audio.pause() : this.audio.play();
    this.isSoundPlaying = !this.isSoundPlaying;
  }

  goHome() {
    window.location.href = '/';
  }
}
