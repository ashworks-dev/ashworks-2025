import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { ResumeComponent } from './components/resume/resume.component';
import { LinkedInComponent } from './components/linkedin/linkedin.component';
import { LandingComponent } from './components/landing/landing.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'video', component: VideoComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'linkedin', component: LinkedInComponent },
  { path: 'client-login', component: ClientLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
