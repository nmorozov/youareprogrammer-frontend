import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
	{ path: '', redirectTo: '/services', pathMatch: 'full' },
	{ path: 'services', component: ServicesComponent },
	{ path: 'notfound', component: NotfoundComponent },
	{ path: 'services/:id', component: ServiceDetailComponent },
	{ path: 'specialists', component: SpecialistsComponent },
	{ path: 'checkout', component: CheckoutComponent },
	{ path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
