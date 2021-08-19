import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.url}/${endpoint}`);
  }

  post(endpoint: string, payload: any): Observable<any> {
    return this.http.post(`${this.url}/${endpoint}`, payload);
  }

  put(endpoint: string, payload: any): Observable<any> {
    return this.http.put(`${this.url}/${endpoint}`, payload);
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.url}/${endpoint}`);
  }
}
