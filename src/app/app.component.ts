import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  accessGranted = false;
  note = '';
  error = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
      this.error = 'Token parameter is required.';
      return;
    }

    this.apiService.verifyToken(token).subscribe(
      (response) => {
        if (response.accessGranted) {
          this.accessGranted = true;
          this.note = response.note || 'Access granted!';
        } else {
          this.error = 'Access denied. Invalid token.';
        }
      },
      (error) => {
        this.error = 'Failed to connect to the server.';
      }
    );
  }
}