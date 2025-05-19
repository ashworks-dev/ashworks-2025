import { Component } from '@angular/core';
import { ResumeService, Experience, Skill, Project, Endorsement, AboutMe } from '../../services/resume.service';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.sass']
})
export class LinkedInComponent {
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

  constructor(private resumeService: ResumeService) {
    this.summary = this.resumeService.summary;
    this.experiences = this.resumeService.experiences;
    this.skills = this.resumeService.skills;
    this.projects = this.resumeService.getProjects(true); // Use LinkedIn descriptions
    this.rndProjects = this.resumeService.rndProjects;
    this.awards = this.resumeService.awards;
    this.endorsements = this.resumeService.endorsements;
    this.contact = this.resumeService.contact;
    this.aboutMe = this.resumeService.aboutMe;
  }

  printResume() {
    window.print();
  }
} 