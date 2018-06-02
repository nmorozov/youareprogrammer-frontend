import { Injectable } from '@angular/core';
import { Service } from './service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { ArrayHelper } from '../utils/ArrayHelper';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private servicesUrl = 'http://localhost:8000/services';
  private selectedServices = [];

  getServices (): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl)
  }

  getService(id: string): Observable<Service> {
    const url = `${this.servicesUrl}/${id}`;
    return this.http.get<Service>(url).pipe(
      catchError(this.handleError<Service>(`getService id=${id}`))
    );
  }

  getSelectedServices(): Service[] {
    return this.selectedServices;
  }

  setSelectedServices(selectedServices): void {
    this.selectedServices = selectedServices;
  }

  toggleSelectedServices(item): void {
    this.arrayHelper.toggleArrayElement(item, this.selectedServices);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.router.navigate(['notfound']);

      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private arrayHelper: ArrayHelper
  ) { }
}
