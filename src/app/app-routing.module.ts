import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ItOnsiteOffshoreComponent } from './it-onsite-offshore/it-onsite-offshore.component';
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
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
