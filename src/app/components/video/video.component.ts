import { Component, OnInit, ViewChild } from '@angular/core';
import { IMediaElement } from '@videogular/ngx-videogular/core';

interface Video {
  title: string;
  description: string;
  thumbnail: string;
  date: Date;
  views: number;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {
  @ViewChild('media', { static: true }) media!: IMediaElement;
  videoError = false;
  showAllProjects = false;
  videos: Video[] = [
    {
      title: 'Corporate Brand Video',
      description: 'A dynamic showcase of company culture and values',
      thumbnail: 'assets/videos/corporate-thumb.jpg',
      date: new Date('2024-01-15'),
      views: 1200
    },
    {
      title: 'Product Launch Event',
      description: 'Live coverage of our latest product unveiling',
      thumbnail: 'assets/videos/product-thumb.jpg',
      date: new Date('2024-02-20'),
      views: 3500
    },
    {
      title: 'Interview Series',
      description: 'In-depth conversations with industry leaders',
      thumbnail: 'assets/videos/interview-thumb.jpg',
      date: new Date('2024-03-01'),
      views: 2800
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onVideoError(event: any): void {
    console.error('Video error:', event);
    this.videoError = true;
  }

  onVideoLoaded(): void {
    console.log('Video loaded successfully');
    this.videoError = false;
  }

  toggleProjects(): void {
    this.showAllProjects = !this.showAllProjects;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openQuoteForm(): void {
    // Implement quote form logic here
    console.log('Opening quote form');
  }

  scheduleCall(): void {
    // Implement call scheduling logic here
    console.log('Opening call scheduler');
  }
} 