import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { IMediaElement } from '@videogular/ngx-videogular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
