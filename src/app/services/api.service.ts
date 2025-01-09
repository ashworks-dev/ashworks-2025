import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://a571cbf9-cf-tokencheck-worker.ashley-norriss.workers.dev/verify-token';

  constructor(private http: HttpClient) {}

  verifyToken(token: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?token=${token}`);
  }
}
