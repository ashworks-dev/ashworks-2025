import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { IMediaElement } from '@videogular/ngx-videogular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

interface VideoMeta {
  icon: string;
  text: string;
}

interface Video {
  id: number;
  title: string;
  src: string;
  meta: VideoMeta[];
  description?: string;
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
      id: 0,
      title: '2023 Showreel',
      src: 'https://ashnet.com.au/video/framed-showreel-1-nok.mp4',
      meta: [
        { icon: 'clock', text: '2:45' },
        { icon: 'film', text: 'Highlights' }
      ]
    },
    {
      id: 1,
      title: 'Coles and ACU',
      src: 'https://ashnet.com.au/video/pf-1.mp4',
      meta: [
        { icon: 'building', text: 'Corporate' },
        { icon: 'graduation-cap', text: 'Education' }
      ],
      description: 'Two of my busiest clients over the years. Interviews with students, teachers, staff and management at Coles and many explainer videos for processes, how-tos and customer relations. Additionally, I have developed 360 tours and interactive training combining the videos and web development.'
    },
    {
      id: 2,
      title: 'Banking & Finance',
      src: 'https://ashnet.com.au/video/pf-2.mp4',
      meta: [
        { icon: 'chart-line', text: 'Corporate' },
        { icon: 'users', text: 'Training' }
      ],
      description: 'The very corporate world of finance has resulted in many interviews, promos for in house initiatives and a series of staged scenario videos often with paid actors from sales to dealing with angry customers.'
    },
    {
      id: 3,
      title: 'Social Work & Therapy',
      src: 'https://ashnet.com.au/video/pf-3.mp4',
      meta: [
        { icon: 'heart', text: 'Healthcare' },
        { icon: 'theater-masks', text: 'Scenarios' }
      ],
      description: 'Usually working with paid actors, or staff, these videos are more emotional with heavily scripted multi angle scenes often focused around intense conversations.'
    }
  ];
  isDevNoteHidden = false;
  private scrollThreshold = 100;
  accessGranted = false;
  errorMessage = '';
  loading = false;
  isVideoLoading = false;
  activeTabId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.loading = true;
        this.apiService.verifyToken(token).subscribe({
          next: (response) => {
            console.log('Token verification response:', response);
            this.accessGranted = true;
            this.loading = false;
          },
          error: (error) => {
            console.error('Token verification error:', error);
            this.errorMessage = 'Access denied. Please check your token.';
            this.loading = false;
          }
        });
      }
    });
  }

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isDevNoteHidden = currentScroll > this.scrollThreshold;
  }

  setActiveTab(tabId: number) {
    console.log('Setting active tab:', tabId);
    
    // Find all video elements and pause the currently playing one
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (!video.paused) {
        console.log('Pausing video:', video);
        video.pause();
      }
      // Reset video to start
      video.currentTime = 0;
    });

    this.activeTabId = tabId;
    this.isVideoLoading = true;

    // After a brief delay, start loading the new video
    setTimeout(() => {
      const newVideo = document.querySelector(`#vf-${tabId} video`) as HTMLVideoElement;
      if (newVideo) {
        console.log('Loading new video:', newVideo);
        newVideo.addEventListener('loadeddata', () => {
          this.isVideoLoading = false;
        });
        newVideo.addEventListener('error', () => {
          this.isVideoLoading = false;
          console.error('Error loading video');
        });
        newVideo.load();
      }
    }, 100);
  }
} 