import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { TopmenuComponent } from './common/topmenu/topmenu.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ItOnsiteOffshoreComponent } from './it-onsite-offshore/it-onsite-offshore.component';
import { DirectPlacementComponent } from './direct-placement/direct-placement.component';
import { ContractStaffingComponent } from './contract-staffing/contract-staffing.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopmenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent,
    CareersComponent,
    ItOnsiteOffshoreComponent,
    DirectPlacementComponent,
    ContractStaffingComponent,
    ManagedServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy,  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
