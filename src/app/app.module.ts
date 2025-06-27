import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { ResumeComponent } from './components/resume/resume.component';
import { LinkedInComponent } from './components/linkedin/linkedin.component';
import { LinkinWebComponent } from './components/linkin-web/linkin-web.component';
import { LandingComponent } from './components/landing/landing.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { LinkedinVideoComponent } from './components/linkedin-video/linkedin-video.component';
import { ShowreelsComponent } from './components/showreels/showreels.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ResumeComponent,
    LinkedInComponent,
    LinkinWebComponent,
    LandingComponent,
    ClientLoginComponent,
    NavComponent,
    FooterComponent,
    ThankYouComponent,
    LinkedinVideoComponent,
    ShowreelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
