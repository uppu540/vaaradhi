import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { ContractStaffingComponent } from './contract-staffing/contract-staffing.component';
import { DirectPlacementComponent } from './direct-placement/direct-placement.component';
import { HomeComponent } from './home/home.component';
import { ItOnsiteOffshoreComponent } from './it-onsite-offshore/it-onsite-offshore.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'career',
    component: CareersComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'it-offshore',
    component: ItOnsiteOffshoreComponent
  },
  {
    path: 'direct-placement',
    component: DirectPlacementComponent
  },
  {
    path: 'contract-staffing',
    component: ContractStaffingComponent
  },
  {
    path: 'managed-services',
    component: ManagedServicesComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
