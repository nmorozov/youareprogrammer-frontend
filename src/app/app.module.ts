import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { ArrayHelper } from '../utils/ArrayHelper';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
	declarations: [
		AppComponent,
		ServicesComponent,
		ServiceDetailComponent,
		SpecialistsComponent,
		NotfoundComponent,
		CheckoutComponent
	],
	imports: [ BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule, AppRoutingModule, ArrayHelper, FormsModule ],
	schemas: [ NO_ERRORS_SCHEMA ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
