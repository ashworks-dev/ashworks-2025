import { Component, OnInit, ViewChild } from '@angular/core';
import { IMediaElement } from '@videogular/ngx-videogular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  @ViewChild('media', { static: true }) media!: IMediaElement;
  videoError = false;
  showAllProjects = false;

  constructor(private router: Router) {}

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

  navigateToVideo(): void {
    this.router.navigate(['/video']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  openEmail(type: 'hire' | 'consulting'): void {
    const subject = type === 'hire' 
      ? 'Web Development Project Inquiry'
      : 'AI Tech Consulting Inquiry';
    const body = type === 'hire'
      ? 'I would like to discuss a web development project with you.'
      : 'I would like to discuss AI tech consulting opportunities with you.';
    
    const mailtoLink = `mailto:ash@ashnet.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
} 