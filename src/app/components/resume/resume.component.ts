import { Component, OnInit } from '@angular/core';
import { ResumeService, Experience, Skill, Project, Endorsement, AboutMe } from '../../services/resume.service';

interface OtherProject {
  title: string;
  period: string;
  link?: string;
  description?: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {
  summary: string;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  rndProjects: Project[];
  awards: string[];
  endorsements: Endorsement[];
  contact: any;
  aboutMe: AboutMe;
  aiAdoption = this.resumeService.aiAdoption;
  expandedProjects: boolean[] = [];
  expandedRndProjects: boolean[] = [];
  expandedExperiences: boolean[] = [];

  constructor(private resumeService: ResumeService) {
    this.summary = this.resumeService.summary;
    this.experiences = this.resumeService.experiences;
    this.skills = this.resumeService.skills;
    this.projects = this.resumeService.getProjects(false);
    this.rndProjects = this.resumeService.rndProjects;
    this.awards = this.resumeService.awards;
    this.endorsements = this.resumeService.endorsements;
    this.contact = this.resumeService.contact;
    this.aboutMe = this.resumeService.aboutMe;
    // Initialize expanded state for all projects as collapsed
    this.expandedProjects = new Array(this.projects.length).fill(false);
    this.expandedRndProjects = new Array(this.rndProjects.length).fill(false);
    this.expandedExperiences = new Array(this.experiences.length).fill(false);
  }

  ngOnInit(): void {
  }

  toggleProjectExpanded(index: number): void {
    this.expandedProjects[index] = !this.expandedProjects[index];
  }

  toggleRndProjectExpanded(index: number): void {
    this.expandedRndProjects[index] = !this.expandedRndProjects[index];
  }

  toggleExperienceExpanded(index: number): void {
    this.expandedExperiences[index] = !this.expandedExperiences[index];
  }

  getProjectPreviewTechs(project: Project): any[] {
    // Check if it's a video project by looking for video-related technologies
    const videoTechs = ['Video Production', 'Video Editing', 'Camera Operation', 'Adobe Premiere', 'Final Cut Pro'];
    const hasVideoTech = project.technologies.some(tech => 
      videoTechs.some(videoTech => tech.name.toLowerCase().includes(videoTech.toLowerCase()))
    );

    if (hasVideoTech) {
      // For video projects, show video-related techs first
      const videoTech = project.technologies.find(tech => 
        videoTechs.some(videoTech => tech.name.toLowerCase().includes(videoTech.toLowerCase()))
      );
      return videoTech ? [videoTech] : project.technologies.slice(0, 1);
    } else {
      // For web projects, show the first technology (usually the main framework)
      return project.technologies.slice(0, 1);
    }
  }

  isVideoProject(project: Project): boolean {
    const videoTechs = ['Video Production', 'Video Editing', 'Camera Operation', 'Adobe Premiere', 'Final Cut Pro'];
    return project.technologies.some(tech => 
      videoTechs.some(videoTech => tech.name.toLowerCase().includes(videoTech.toLowerCase()))
    );
  }
}