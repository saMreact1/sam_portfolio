import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  technologies: string[];
  side: 'left' | 'right';
  icon: string; // Initial or logo
  iconColor: string;
}

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent {
  experiences: Experience[] = [
    {
      company: 'Blueraft Energy and Marine Services',
      role: 'Frontend Engineer',
      location: 'Lagos, NG',
      period: 'Mar 2025 - May 2025',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      side: 'right',
      icon: 'B',
      iconColor: '#031770d8'
    },
    {
      company: 'HiedBerg LTD',
      role: 'Junior Frontend Engineer',
      location: 'London, UK',
      period: 'Aug 2024 - Sept 2024',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      side: 'left',
      icon: 'H',
      iconColor: '#22d3ee'
    },
    {
      company: 'Olohie Virtual',
      role: 'Junior Frontend Engineer',
      location: 'Calgary, AB',
      period: 'Jun 2024 - Aug 2024',
      technologies: ['Angular', 'TypeScript'],
      side: 'right',
      icon: 'O',
      iconColor: '#818cf8'
    },
    {
      company: 'WorkWise',
      role: 'Frontend Engineer',
      location: 'Lagos, NG',
      period: 'Aug 2023 - Present',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      side: 'left',
      icon: 'W',
      iconColor: '#DC143C'
    }
  ]
}
