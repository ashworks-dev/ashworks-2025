import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { IMediaElement } from '@videogular/ngx-videogular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  @ViewChild('media', { static: true }) media!: IMediaElement;
  @ViewChild('aiServiceCard', { static: false }) aiServiceCard!: ElementRef;
  
  videoError = false;
  showAllProjects = false;
  showQuoteModal = false;
  showSuccessMessage = false;
  aiVideoVisible = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Add user interaction listener to handle autoplay policies
    this.addUserInteractionListener();
  }

  addUserInteractionListener(): void {
    let hasInteracted = false;
    
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        hasInteracted = true;
        // Try to play any paused videos
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
          if (video.paused && video.muted) {
            video.play().catch(error => {
              console.log('Video play on interaction failed:', error);
            });
          }
        });
        // Remove listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
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

  scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
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

  openQuoteForm(): void {
    this.showQuoteModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeQuoteForm(): void {
    this.showQuoteModal = false;
    this.showSuccessMessage = false;
    document.body.style.overflow = 'auto';
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
} 