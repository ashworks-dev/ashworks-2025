import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: 'video', component: VideoComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: '/video', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
