import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[];

  getServices(): void {
    this.serviceService.getServices()
        .subscribe(services => this.services = services);
  }

  constructor(private serviceService: ServiceService) { }

  selectService(serviceId): void {
    alert('Service selected ' + serviceId);
  }

  ngOnInit() {
    this.getServices();
  }

}
