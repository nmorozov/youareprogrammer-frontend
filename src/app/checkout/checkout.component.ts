import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { SpecialistService } from '../specialist.service';
import { ServiceService } from '../service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input() hoursCount: number = 1;
  total: number = 0;
  selectedSpecialist;

  getSelectedSpecialist(): void {
    this.selectedSpecialist = this.specialistService.getSelectedSpecialist();
  }

  goBack(): void {
    this.location.back();
  }

  placeOrder(): void {
    this.specialistService.setSelectedSpecialist(null);
    this.serviceService.setSelectedServices([]);
    this.router.navigate(["services"]);
  }

  onKeyHoursCount(event): void {
    event.preventDefault();
    let value = event.target.value;

    if (value === '') {
      return;
    }

    if (parseInt(value, 10) < 1) {
      value = this.hoursCount = 1;
    }

    this.calculateTotal(value);
  }

  calculateTotal(hourseCount): void {
    this.total = hourseCount * this.selectedSpecialist.hour_cost;
  }

  constructor(
    private location: Location,
    private specialistService: SpecialistService,
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSelectedSpecialist();
    this.calculateTotal(this.hoursCount);
  }

}
