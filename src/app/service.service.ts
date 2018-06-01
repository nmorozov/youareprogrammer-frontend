import { Injectable } from '@angular/core';
import { Service } from './service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private servicesUrl = 'http://localhost:8000/services';

  getServices (): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl)
  }

  getService(id: string): Observable<Service> {
    const url = `${this.servicesUrl}/${id}`;
    return this.http.get<Service>(url);
  }

  constructor(private http: HttpClient) { }
}
