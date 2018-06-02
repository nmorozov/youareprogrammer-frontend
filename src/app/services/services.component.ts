import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ServiceService } from '../service.service';
import _ from 'lodash';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[];
  selectedServices;

  getServices(): void {
    this.serviceService.getServices()
        .subscribe(services => this.services = services);
  }

  getSelectedServices(): void {
    this.selectedServices = this.serviceService.getSelectedServices();
  }

  selectService(serviceId): void { 
    this.serviceService.toggleSelectedServices(serviceId);
    this.getSelectedServices();
  }

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.getServices();
    this.getSelectedServices();
  }

}
