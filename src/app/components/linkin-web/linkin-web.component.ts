import { Component, OnInit } from '@angular/core';
import { ResumeService, Experience, Skill, Project, Endorsement, AboutMe } from '../../services/resume.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-linkin-web',
  templateUrl: './linkin-web.component.html',
  styleUrls: ['./linkin-web.component.sass']
})
export class LinkinWebComponent implements OnInit {
  today = new Date();
  summary: string;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
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
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    // Use webSummary from resume service for web development focus
    this.summary = this.resumeService.webSummary;
    
    // Custom AI adoption text focused on web development
    this.aiAdoption = "Early adopter of AI technologies in web development, integrating AI-powered tools for code generation, testing automation, and user experience optimization. Experienced with AI-assisted development workflows, automated testing frameworks, and implementing AI features in web applications. Continuously exploring emerging AI technologies to enhance development efficiency and create more intelligent, responsive web solutions.";
    
    // Use the original experience data from resume service (same as resume.component.ts)
    this.experiences = this.resumeService.experiences;
    
    this.skills = this.resumeService.skills;
    // Filter out video-only projects for web development focus
    this.projects = this.resumeService.getProjects(true).filter(project => !project.videoOnly);
    this.rndProjects = this.resumeService.rndProjects;
    this.awards = this.resumeService.awards;
    this.endorsements = this.resumeService.endorsements;
    this.contact = this.resumeService.contact;
    
    // Create custom aboutMe data that downplays video role
    this.aboutMe = this.createWebDevAboutMe();
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

  private createWebDevAboutMe(): AboutMe {
    const originalAboutMe = this.resumeService.aboutMe;
    
    return {
      ...originalAboutMe,
      personalBackground: {
        story: "My journey into technology began with a fascination for creating digital solutions that solve real-world problems. Starting with web development in the early 2000s, I've evolved from building simple websites to architecting complex, scalable applications that serve thousands of users. My background in multimedia production has given me a unique perspective on user experience design, allowing me to create applications that are not only functional but also intuitive and engaging.",
        family: ""
      },
      careerObjectives: "I love coding, finding elegant solutions to complex problems, and continuously learning whatever new technologies come my way. My passion lies in creating robust, scalable applications that make a real difference in people's lives. I thrive on the challenge of mastering emerging technologies and applying them to solve real-world problems. Whether it's building full-stack applications, integrating AI solutions, or architecting cloud-based systems, I'm driven by the satisfaction of turning ideas into functional, user-friendly solutions. I'm always excited to explore new frameworks, languages, and methodologies, believing that the best developers are perpetual students of their craft."
    };
  }

  printResume() {
    window.print();
  }
} 