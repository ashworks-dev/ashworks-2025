import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isNavVisible = true;
  lastScrollPosition = 0;
  isLinkedInPage = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isLinkedInPage = event.url === '/linkedin';
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScroll = window.pageYOffset;
    this.isNavVisible = currentScroll <= 0 || currentScroll < this.lastScrollPosition;
    this.lastScrollPosition = currentScroll;
  }

  printResume() {
    window.print();
  }
} 