import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  service: Service;

  getService(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceService.getService(id.toString())
        .subscribe(service => this.service = service);
  }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private serviceService: ServiceService, 
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getService();
  }
}
