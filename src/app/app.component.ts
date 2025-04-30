import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ApiService } from './services/api.service';
import { IMediaElement } from '@videogular/ngx-videogular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  accessGranted = false;
  note = '';
  error = '';
  isLinkedInRoute = false;
  isNavVisible = true;
  lastScrollPosition = 0;

  @ViewChild('media', { static: true }) media!: IMediaElement;

  constructor(private apiService: ApiService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isLinkedInRoute = event.url === '/linkedin';
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScroll = window.pageYOffset;
    this.isNavVisible = currentScroll <= 0 || currentScroll < this.lastScrollPosition;
    this.lastScrollPosition = currentScroll;
  }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
      this.error = 'Token parameter is required.';
      return;
    }

    this.apiService.verifyToken(token).subscribe(
      (response) => {
        console.log("Server connected")
        if (response.accessGranted) {
          this.accessGranted = true;
          this.note = response.note || 'Access granted!';
        } else {
          this.error = 'Access denied. Invalid token.';
        }
      },
      (error) => {
        this.error = '!!!!!!!Failed to connect to the server.';
      }
    );
  }

  printResume(): void {
    window.print();
  }
}