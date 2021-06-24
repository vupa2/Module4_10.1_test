import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Awesome } from './awesome';

const baseUrl = 'http://localhost:3000/awesomes';

@Injectable({
  providedIn: 'root',
})
export class AwesomeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(baseUrl);
  }

  get(id: number): Observable<Awesome> {
    return this.http.get<Awesome>(`${baseUrl}/${id}`);
  }

  update(id: number, data: Awesome) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${baseUrl}/${id}`, JSON.stringify(data), {headers: headers});
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
