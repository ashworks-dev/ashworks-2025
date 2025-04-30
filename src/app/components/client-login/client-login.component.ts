import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent {
  loading = false;
  errorMessage = '';
  accessGranted = false;
  token = '';

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Check for existing token in URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      this.verifyToken(token);
    }
  }

  verifyToken(token: string): void {
    this.loading = true;
    this.apiService.verifyToken(token).subscribe({
      next: (response) => {
        if (response.accessGranted) {
          this.accessGranted = true;
          // Redirect to video page with token
          this.router.navigate(['/video'], { queryParams: { token } });
        } else {
          this.errorMessage = 'Access denied. Invalid token.';
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Token verification error:', error);
        this.errorMessage = 'Access denied. Please check your token.';
        this.loading = false;
      }
    });
  }
} 