import { Injectable } from '@angular/core';
import { Specialist } from './specialist';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {

  private servicesUrl = 'http://localhost:8000/specialists/?services=';
  private selectedSpecialist;

  getSpecialists (selectedServices): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(this.servicesUrl + selectedServices)
  }

  getSelectedSpecialist(): Specialist {
    return this.selectedSpecialist;
  }

  setSelectedSpecialist(specialist: Specialist): void {
    this.selectedSpecialist = specialist;
  }

  constructor(private http: HttpClient) { }
}
