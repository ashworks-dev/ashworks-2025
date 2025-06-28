import { Component, OnInit } from '@angular/core';
import { ResumeService, Experience, Skill, Project, Endorsement, AboutMe } from '../../services/resume.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

interface ProjectData {
  client: string;
  projects: {
    project_name: string;
    type: string;
    year: string | number;
    description: string;
    featured?: boolean;
  }[];
}

@Component({
  selector: 'app-linkedin-all',
  templateUrl: './linkedin-all.component.html',
  styleUrls: ['./linkedin-all.component.sass']
})
export class LinkedinAllComponent implements OnInit {
  today = new Date();
  summary: string;
  experiences: Experience[];
  skills: Skill[];
  projects: any[] = [];
  rndProjects: Project[];
  awards: string[];
  endorsements: Endorsement[];
  contact: any;
  aboutMe: AboutMe;
  aiAdoption: string;
  accessGranted = false;
  errorMessage = '';
  loading = false;

  constructor(
    private resumeService: ResumeService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    // Use the original summary that covers both web development and video production
    this.summary = this.resumeService.summary;
    
    // Use the original AI adoption text that covers both areas
    this.aiAdoption = this.resumeService.aiAdoption;
    
    // Use the original experience data from resume service (includes both web and video)
    this.experiences = this.resumeService.experiences;
    
    this.skills = this.resumeService.skills;
    this.rndProjects = this.resumeService.rndProjects;
    this.awards = this.resumeService.awards;
    this.endorsements = this.resumeService.endorsements;
    this.contact = this.resumeService.contact;
    
    // Use the original aboutMe data that covers both areas
    this.aboutMe = this.resumeService.aboutMe;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.loading = true;
        this.apiService.verifyToken(token).subscribe({
          next: (response) => {
            console.log('Token verification response:', response);
            this.accessGranted = true;
            this.loading = false;
            this.loadProjectHistory();
          },
          error: (error) => {
            console.error('Token verification error:', error);
            this.errorMessage = 'Access denied. Please check your token.';
            this.loading = false;
          }
        });
      } else {
        this.errorMessage = 'Access token required.';
      }
    });
  }

  loadProjectHistory() {
    this.http.get<any>('/assets/projects.json').subscribe({
      next: (data) => {
        // Flatten all projects into a single array with client info
        this.projects = data.projects.flatMap((clientGroup: ProjectData) => 
          clientGroup.projects.map(project => ({
            ...project,
            client: clientGroup.client
          }))
        );
        
        // Sort by project type priority (Web/Video-Web first) then by year (newest first)
        this.projects.sort((a, b) => {
          // Define priority order: Web and Video/Web projects first
          const getTypePriority = (type: string) => {
            if (type === 'Web' || type === 'Video/Web') return 1;
            if (type === 'Video') return 2;
            return 3; // Any other types
          };
          
          const priorityA = getTypePriority(a.type);
          const priorityB = getTypePriority(b.type);
          
          // First sort by type priority
          if (priorityA !== priorityB) {
            return priorityA - priorityB;
          }
          
          // Then sort by year (newest first) within each type
          const yearA = typeof a.year === 'string' ? parseInt(a.year.split('-')[0]) : a.year;
          const yearB = typeof b.year === 'string' ? parseInt(b.year.split('-')[0]) : b.year;
          return yearB - yearA;
        });
      },
      error: (error) => {
        console.error('Error loading project history:', error);
        this.projects = [];
      }
    });
  }

  printResume() {
    window.print();
  }

  getWebProjects() {
    return this.projects.filter(project => project.type === 'Web' || project.type === 'Video/Web');
  }

  getVideoProjects() {
    return this.projects.filter(project => project.type === 'Video');
  }
}
