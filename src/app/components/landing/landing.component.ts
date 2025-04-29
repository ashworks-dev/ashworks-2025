import { Component, OnInit, ViewChild } from '@angular/core';
import { IMediaElement } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  @ViewChild('media', { static: true }) media!: IMediaElement;
  videoError = false;

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
} 