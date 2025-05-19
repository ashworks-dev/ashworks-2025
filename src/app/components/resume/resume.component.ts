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
  }

  ngOnInit(): void {
  }
}