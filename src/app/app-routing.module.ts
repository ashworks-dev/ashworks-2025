import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { ResumeComponent } from './components/resume/resume.component';
import { LinkedInComponent } from './components/linkedin/linkedin.component';
import { LinkinWebComponent } from './components/linkin-web/linkin-web.component';
import { LinkedinVideoComponent } from './components/linkedin-video/linkedin-video.component';
import { ShowreelsComponent } from './components/showreels/showreels.component';
import { LandingComponent } from './components/landing/landing.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'video', component: VideoComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'linkedin', component: LinkedInComponent },
  { path: 'linkedin-web', component: LinkinWebComponent },
  { path: 'linkedin-video', component: LinkedinVideoComponent },
  { path: 'showreels', component: ShowreelsComponent },
  { path: 'client-login', component: ClientLoginComponent },
  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
