import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://cf-tokencheck-worker.ashley-norriss.workers.dev/verify-token';

  constructor(private http: HttpClient) {}

  verifyToken(token: string): Observable<any> {
    console.log('Verifying token:', token);
    console.log('API URL:', `${this.apiUrl}?token=${token}`);
    
    return this.http.get<any>(`${this.apiUrl}?token=${token}`).pipe(
      tap(response => {
        console.log('Token verification successful:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Token verification failed:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        console.error('Error body:', error.error);
        
        // If there's debug info in the error, log it
        if (error.error && error.error.debug) {
          console.error('Debug info:', error.error.debug);
        }
        
        return throwError(() => error);
      })
    );
  }

  // Test method to verify API is working
  testApi(): Observable<any> {
    console.log('Testing API with token 1234...');
    return this.verifyToken('1234');
  }
}
