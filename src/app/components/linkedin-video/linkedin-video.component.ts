import { Component, OnInit } from '@angular/core';
import { ResumeService, Experience, Skill, Project, Endorsement, AboutMe } from '../../services/resume.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-linkedin-video',
  templateUrl: './linkedin-video.component.html',
  styleUrls: ['./linkedin-video.component.sass']
})
export class LinkedinVideoComponent implements OnInit {
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
  keyClients: string[];
  showPortfolio: boolean = true;

  constructor(
    private resumeService: ResumeService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    // Check for port parameter
    this.route.queryParams.subscribe(params => {
      this.showPortfolio = params['port'] !== 'false';
    });

    // Use custom video production focused summary
    this.summary = "After decades of working with technology and building web applications, I pursued a passion of mine to enter into video production - self-funded and running the entire operation myself for my main employer. This has allowed them to offer professional video services to their clients and has been a solid partnership for nearly a decade. This transition has led to over 7 years of expertise in corporate video production, training content creation, and multimedia storytelling. Specialized in creating engaging, professional video content for businesses, educational institutions, and training programs. Proven track record of delivering high-quality video solutions that effectively communicate complex messages and drive engagement. My background in technology has given me a unique perspective on digital content delivery, allowing me to create videos that are not only visually compelling but also optimized for various platforms and audiences.";
    
    // Custom AI adoption text focused on video production
    this.aiAdoption = "Early adopter of AI technologies in video production, focusing on R&D into real-world commercial use cases for AI using avatars, lipsync, and compositing. Experienced with both open source tools and platform-based solutions for AI image and video workflows. Continuously exploring emerging AI capabilities for practical business applications, from automated content generation to AI-assisted post-production workflows. My approach combines technical experimentation with commercial implementation, ensuring AI solutions deliver tangible value in production environments. Almost there!!";
    
    // Create custom experience data with Video Production section first
    this.experiences = this.createVideoExperiences();
    
    // Filter out eLearning Platforms and Development IDE categories
    this.skills = this.resumeService.skills.filter(category => 
      category.category !== 'eLearning Platforms' && 
      category.category !== 'Development IDE'
    ).map(category => {
      // If it's the eLearning & Media category, filter out the eLearning Platforms subcategory and rename
      if (category.category === 'eLearning & Media') {
        return {
          ...category,
          category: 'Video Production',
          subcategories: category.subcategories.filter(subcategory => 
            subcategory.name !== 'eLearning Platforms'
          ).map(subcategory => {
            // Add Kling to AI Media subcategory
            if (subcategory.name === 'AI Media') {
              return {
                ...subcategory,
                items: [
                  ...subcategory.items,
                  { name: 'Kling' }
                ]
              };
            }
            return subcategory;
          })
        };
      }
      return category;
    });
    
    this.rndProjects = []; // Remove Technical R&D section for video resume
    this.awards = []; // Remove awards section for video resume
    this.endorsements = this.resumeService.endorsements;
    this.contact = this.resumeService.contact;
    
    // Create custom aboutMe data that focuses on video production
    this.aboutMe = this.createVideoAboutMe();
    
    // Key clients for video production
    this.keyClients = [
      'NAB (National Australia Bank)',
      'Coles Group',
      'Suncorp Group',
      'Powercor Australia',
      'Department of Education',
      'Department of Health',
      'Monash University',
      'Melbourne University',
      'Australian Catholic University',
      'Melba Support Services (NDIS)',
      'Australian Association of Social Workers (AASW)',
      'Cell Therapies Australia'
    ];
  }

  ngOnInit() {
    this.loadProjectHistory();
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
        
        // Filter out Web projects, keep only Video and Video/Web
        this.projects = this.projects.filter(project => 
          project.type === 'Video' || project.type === 'Video/Web'
        );
        
        // Sort by year (newest first)
        this.projects.sort((a, b) => {
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

  private createVideoAboutMe(): AboutMe {
    const originalAboutMe = this.resumeService.aboutMe;
    
    return {
      ...originalAboutMe,
      personalBackground: {
        story: "My journey into video production began with a passion for storytelling and visual communication. Starting with basic video editing in 2017, I've evolved from creating simple promotional videos to producing comprehensive training series and corporate content that reaches thousands of viewers. My background in web development has given me a unique perspective on digital content delivery, allowing me to create videos that are not only visually compelling but also optimized for various platforms and audiences.",
        family: ""
      },
      strengths: [
        "End-to-end video production management from concept to final delivery",
        "Self-managed logistics including location scouting, equipment setup, and crew coordination",
        "Expert stakeholder management and client communication throughout production process",
        "Comprehensive script review and storyboard development for complex training content",
        "Multi-camera setup and professional lighting design for corporate environments",
        "Post-production workflow optimization and quality control processes"
      ],
      workStyle: [
        "Collaborative approach with clients to understand their vision and requirements",
        "Meticulous pre-production planning to ensure smooth on-location filming",
        "Adaptive problem-solving during production to handle unexpected challenges",
        "Quality-focused post-production with attention to detail and client feedback",
        "Continuous learning and experimentation with new video technologies and techniques",
        "Efficient workflow management balancing creativity with project deadlines"
      ],
      keyAchievements: [
        "Produced over 200 corporate training videos for major Australian organizations",
        "Successfully managed complex multi-location shoots across multiple states",
        "Developed award-winning 360° VR training environments and immersive content",
        "Created comprehensive video series reaching thousands of corporate learners",
        "Established efficient video production workflows reducing project delivery times",
        "Built lasting client relationships through consistent quality and reliable delivery"
      ],
      careerObjectives: "I love creating compelling visual stories, finding innovative ways to communicate complex ideas through video, and continuously learning new production techniques and technologies. My passion lies in producing high-quality video content that makes a real impact on viewers and helps organizations achieve their communication goals. I thrive on the challenge of transforming abstract concepts into engaging visual narratives and applying creative solutions to production challenges. Whether it's filming corporate interviews, creating training content, or producing promotional videos, I'm driven by the satisfaction of turning ideas into compelling visual stories. I'm always excited to explore new filming techniques, editing technologies, and storytelling methods, believing that the best video producers are perpetual students of their craft."
    };
  }

  private createVideoExperiences(): Experience[] {
    const originalExperiences = this.resumeService.experiences;
    
    return originalExperiences.map(exp => {
      if (exp.company === 'Liberate Learning') {
        // Filter out existing section headers first
        const nonHeaderItems = exp.description.filter(item => !item.startsWith('SECTION_HEADER:'));
        
        // Reorder the description to put Videography first
        const videographyItems = nonHeaderItems.filter(item => 
          item.includes('Videography') || 
          item.includes('video') || 
          item.includes('camera') || 
          item.includes('editing') || 
          item.includes('production') ||
          item.includes('shoot') ||
          item.includes('filming') ||
          item.includes('Adobe') ||
          item.includes('Premiere') ||
          item.includes('After Effects')
        );
        
        const developmentItems = nonHeaderItems.filter(item => 
          item.includes('Development') || 
          item.includes('Angular') || 
          item.includes('React') || 
          item.includes('Node.js') || 
          item.includes('JavaScript') ||
          item.includes('TypeScript') ||
          item.includes('CSS') ||
          item.includes('HTML') ||
          item.includes('API') ||
          item.includes('database') ||
          item.includes('AWS') ||
          item.includes('cloud') ||
          item.includes('testing') ||
          item.includes('Git') ||
          item.includes('CI/CD')
        );
        
        const otherItems = nonHeaderItems.filter(item => 
          !developmentItems.includes(item) && !videographyItems.includes(item)
        );
        
        // Add new video production items
        const newVideographyItems = [
          ...videographyItems,
          'Produced over 200 training videos for major Australian corporations',
          'Specialized in corporate interview filming and b-roll production',
          'Experienced with 360° VR video production and immersive content'
        ];
        
        // Create new description with Videography section first
        const newDescription = [
          'SECTION_HEADER:Video Production (as of 2017)',
          ...newVideographyItems,
          'SECTION_HEADER:Development',
          ...developmentItems,
          ...otherItems
        ];
        
        return {
          ...exp,
          position: 'Video Producer / Senior Developer (Remote Contractor)',
          description: newDescription
        };
      } else {
        // For other companies, keep a simple summary instead of removing everything
        return {
          ...exp,
          position: exp.position || 'Senior Developer',
          //description: [exp.companyDescription || 'Senior development role with focus on web applications and digital solutions.'],
          //companyDescription: undefined, // Remove detailed company descriptions
          achievements: undefined // Remove achievements
        };
      }
    });
  }

  printResume() {
    window.print();
  }
}
