import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { IMediaElement } from '@videogular/ngx-videogular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @ViewChild('aiServiceCard', { static: false }) aiServiceCard!: ElementRef;
  videoError = false;
  showAllProjects = false;
  showQuoteModal = false;
  showShowreelModal = false;
  showSuccessMessage = false;
  showShowreelSuccessMessage = false;
  aiVideoVisible = false;
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
        { icon: 'graduation-cap', text: 'Education' },
        { icon: 'theater-masks', text: 'Customer Scenarios' }
      ],
      description: 'Two of my busiest clients over the years. Interviews with students, teachers, staff and management at Coles and many explainer videos for processes, how-tos and customer relations. Additionally, I have developed 360 tours and interactive training combining the videos and web development.'
    },
    {
      id: 2,
      title: 'Dept. of Health & PowerCor',
      src: 'https://ashnet.com.au/video/pf-2.mp4',
      meta: [
        { icon: 'shield-alt', text: 'Safety Training' },
        { icon: 'hard-hat', text: 'Technical' },
        { icon: 'compass', text: '360° Video' }
      ],
      description: 'Two major projects running in parallel: For the Department of Health, produced comprehensive food safety training videos and created interactive 360° virtual tours of commercial kitchens. During COVID-19, delivered rapid-response hand hygiene training videos. For Powercor, Australia\'s largest electricity distributor, produced 50+ safety training videos covering critical topics including high-voltage safety procedures, emergency response protocols, and field operation guidelines. Both projects involved complex technical scenarios, safety demonstrations, and on-location filming across multiple sites.'
    },
    {
      id: 3,
      title: 'Banking and Finance',
      src: 'https://ashnet.com.au/video/pf-3.mp4',
      meta: [
        { icon: 'chart-line', text: 'Finance' },
        { icon: 'theater-masks', text: 'Customer Scenarios' }
      ],
      description: 'The very corporate world of finance has resulted in many interviews, promos for in house initiatives and a series of staged scenario videos often with paid actors from sales to dealing with angry customers.'
    },
    {
      id: 4,
      title: 'Social Work & Therapy',
      src: 'https://ashnet.com.au/video/pf-4.mp4',
      meta: [
        { icon: 'heart', text: 'Health & Wellbeing' },
        { icon: 'theater-masks', text: 'Client Scenarios' }
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
  showRates = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      const rates = params['rates'];
      
      // Check if rates should be shown
      this.showRates = rates === 'true' || rates === '1' || rates === 'show';
      
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
    this.showQuoteModal = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeQuoteForm(): void {
    this.showQuoteModal = false;
    this.showSuccessMessage = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  scheduleCall(): void {
    // Open email client with pre-filled subject and body
    const subject = 'Video Production Project Discussion';
    const body = 'I would like to schedule a call to discuss a video production project.';
    const mailtoLink = `mailto:ash@ashnet.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isDevNoteHidden = currentScroll > this.scrollThreshold;
    this.checkAiServiceCardVisibility();
  }

  checkAiServiceCardVisibility(): void {
    if (this.aiServiceCard) {
      const rect = this.aiServiceCard.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger when the card is 50% visible
      if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
        if (!this.aiVideoVisible) {
          this.aiVideoVisible = true;
          // Add a small delay to make the transition more dramatic
          setTimeout(() => {
            const aiIcon = this.aiServiceCard.nativeElement.querySelector('.ai-icon');
            const aiVideo = this.aiServiceCard.nativeElement.querySelector('.ai-video') as HTMLVideoElement;
            
            if (aiIcon) aiIcon.style.opacity = '0';
            if (aiVideo) {
              aiVideo.style.opacity = '1';
              // Ensure video is muted to comply with autoplay policies
              aiVideo.muted = true;
              // Try to play the video
              const playPromise = aiVideo.play();
              if (playPromise !== undefined) {
                playPromise.catch(error => {
                  console.log('Video play failed:', error);
                  // If autoplay fails, we can still show the video frame
                  // The video will play when user interacts with the page
                });
              }
            }
          }, 500);
        }
      }
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showQuoteModal) {
      this.closeQuoteForm();
    }
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

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        this.showSuccessMessage = true;
        form.reset();
      } else {
        console.error('Form submission failed:', data);
        alert('There was an error submitting the form. Please try again.');
      }
    })
    .catch(error => {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  }

  openShowreelForm(): void {
    this.showShowreelModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeShowreelForm(): void {
    this.showShowreelModal = false;
    this.showShowreelSuccessMessage = false;
    document.body.style.overflow = 'auto';
  }

  onShowreelSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        this.showShowreelSuccessMessage = true;
        form.reset();
      } else {
        console.error('Form submission failed:', data);
        alert('There was an error submitting the form. Please try again.');
      }
    })
    .catch(error => {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  }
} 