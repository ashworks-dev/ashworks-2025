import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

interface ProjectMedia {
  type: string;
  url: string;
  title?: string;
  description?: string;
  isPoster?: boolean;
}

interface Project {
  project_name: string;
  type: string;
  year: number | string | null;
  description: string;
  featured?: boolean;
  posterImage?: string;
  media?: ProjectMedia[];
}

interface ClientProject {
  client: string;
  projects: Project[];
}

interface ApiResponse {
  projects: ClientProject[];
}

interface EditableProject extends Project {
  isEditing?: boolean;
  originalData?: Project;
}

@Component({
  selector: 'app-showreels',
  templateUrl: './showreels.component.html',
  styleUrls: ['./showreels.component.sass']
})
export class ShowreelsComponent implements OnInit {
  videos: Video[] = [
    {
      id: 0,
      title: '2023 Showreel',
      src: 'http://cdn.ashworks.com.au/video/framed-showreel-1-nok.mp4',
      meta: [
        { icon: 'clock', text: '2:45' },
        { icon: 'film', text: 'Highlights' }
      ]
    },
    {
      id: 1,
      title: 'Coles and ACU',
      src: 'https://cdn.ashworks.com.au/video/pf-1.mp4',
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
      src: 'https://cdn.ashworks.com.au/video/pf-2.mp4',
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
      src: 'https://cdn.ashworks.com.au/video/pf-3.mp4',
      meta: [
        { icon: 'chart-line', text: 'Finance' },
        { icon: 'theater-masks', text: 'Customer Scenarios' }
      ],
      description: 'The very corporate world of finance has resulted in many interviews, promos for in house initiatives and a series of staged scenario videos often with paid actors from sales to dealing with angry customers.'
    },
    {
      id: 4,
      title: 'Social Work & Therapy',
      src: 'https://cdn.ashworks.com.au/video/pf-4.mp4',
      meta: [
        { icon: 'heart', text: 'Health & Wellbeing' },
        { icon: 'theater-masks', text: 'Client Scenarios' }
      ],
      description: 'Usually working with paid actors, or staff, these videos are more emotional with heavily scripted multi angle scenes often focused around intense conversations.'
    }
  ];

  videoProjects: EditableProject[] = [];
  showAllProjects = false;
  expandedProjects: boolean[] = [];
  showShowreelModal = false;
  showShowreelSuccessMessage = false;
  accessGranted = false;
  errorMessage = '';
  loading = false;
  isVideoLoading = false;
  activeTabId: number = 0;
  hasToken = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      const editMode = params['edit'];
      
      if (token) {
        this.hasToken = true;
        this.loading = true;
        this.apiService.verifyToken(token).subscribe({
          next: (response) => {
            console.log('Token verification response:', response);
            this.accessGranted = true;
            this.loading = false;
            
            // Show success message briefly, then load content
            setTimeout(() => {
              this.loadVideoProjects();
            }, 2000); // Show success message for 2 seconds
          },
          error: (error) => {
            console.error('Token verification error:', error);
            this.errorMessage = 'Invalid or expired access token. Please check your link or request a new one.';
            this.loading = false;
          }
        });
      } else {
        // No token provided - don't load projects, show access request form
        this.hasToken = false;
        this.accessGranted = false;
        this.loading = false;
      }
    });
  }

  loadVideoProjects(): void {
    this.loading = true;
    
    // Fetch projects.json directly as a static asset
    this.http.get<ApiResponse>('/assets/projects.json').subscribe({
      next: (data) => {
        console.log('Projects data from JSON file:', data);
        this.processProjectsData(data);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading projects from JSON file:', error);
        this.errorMessage = 'Failed to load projects. Please try again later.';
        this.loading = false;
      }
    });
  }

  processProjectsData(data: ApiResponse): void {
    const videoProjects: EditableProject[] = [];
    
    data.projects.forEach(clientProject => {
      clientProject.projects.forEach(project => {
        if (project.type === 'Video' || project.type === 'Video/Web') {
          // Find the poster image from media array
          let posterImage = project.posterImage; // Keep existing posterImage if it exists
          
          if (project.media && project.media.length > 0) {
            // Look for media item marked as poster
            const posterMedia = project.media.find(media => media.isPoster && media.type === 'image');
            if (posterMedia) {
              posterImage = posterMedia.url;
            } else {
              // If no poster is set, use the first image as fallback
              const firstImage = project.media.find(media => media.type === 'image');
              if (firstImage) {
                posterImage = firstImage.url;
              }
            }
          }
          
          const enhancedProject: EditableProject = {
            ...project,
            project_name: `${clientProject.client}: ${project.project_name}`,
            posterImage: posterImage,
            media: project.media || []
          };
          videoProjects.push(enhancedProject);
        }
      });
    });
    
    console.log('Filtered video projects:', videoProjects);
    
    // Sort by featured first, then by year (most recent first)
    this.videoProjects = videoProjects.sort((a, b) => {
      // Featured projects come first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      
      // Then sort by year (most recent first)
      const yearA = typeof a.year === 'number' ? a.year : parseInt(a.year?.toString() || '0');
      const yearB = typeof b.year === 'number' ? b.year : parseInt(b.year?.toString() || '0');
      return yearB - yearA;
    });
    
    console.log('Final sorted video projects:', this.videoProjects);
    
    // Initialize expanded projects array
    this.expandedProjects = Array(this.videoProjects.length).fill(false);
  }

  toggleProjects(): void {
    this.showAllProjects = !this.showAllProjects;
  }

  toggleProject(index: number): void {
    this.expandedProjects[index] = !this.expandedProjects[index];
  }

  getProjectImage(project: EditableProject, index: number): string {
    return project.posterImage || '';
  }

  getProjectImageClass(project: EditableProject, index: number): string {
    return project.posterImage ? 'project-image' : `project-image placeholder gradient-${((index % 6) + 1)}`;
  }

  hasMedia(project: EditableProject): boolean {
    return !!(project.media && project.media.length > 0);
  }

  getMediaByType(project: EditableProject, type: string): ProjectMedia[] {
    return project.media?.filter(media => media.type === type) || [];
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

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showShowreelModal) {
      this.closeShowreelForm();
    }
  }
}
