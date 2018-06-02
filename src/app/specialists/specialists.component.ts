import { Component, OnInit } from '@angular/core';
import { Specialist } from '../specialist';
import { SpecialistService } from '../specialist.service';
import { ServiceService } from '../service.service';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent implements OnInit {

  specialists: Specialist[] = [];
  selectedServices;

  getSpecialists(): void {
    if (this.selectedServices.length < 1) {
      this.specialists = [];
    } else {
      let servicesString;

      if (this.selectedServices.length < 2) {
        servicesString = this.selectedServices[0];
      } else {
        servicesString = this.selectedServices.join(',');
      }

      this.specialistService.getSpecialists(servicesString)
      .subscribe(specialists => this.specialists = specialists);
    }
  }

  getSelectedServices(): void {
    this.selectedServices = this.serviceService.getSelectedServices();
  }

  goBack(): void {
    this.location.back();
  }

  goToCheckout(specialist: Specialist): void {
    this.specialistService.setSelectedSpecialist(specialist);
    this.router.navigate(['checkout']);

    console.log(this.specialistService.getSelectedSpecialist());
  }

  constructor(
    private serviceService: ServiceService, 
    private specialistService: SpecialistService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getSelectedServices();
    this.getSpecialists();
  }

}
