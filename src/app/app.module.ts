import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'video', component: VideoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    VgCoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
