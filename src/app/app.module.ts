import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatNativeDateModule } from '@angular/material/core'


import { AppComponent } from './app.component';
import { ShowApplicatorComponent } from './applicator/components/show-applicator/show-applicator.component';
import { AddApplicatorComponent } from './applicator/components/add-applicator/add-applicator.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routes/route-module';
import { HomeComponent } from './home/home.component';
import { ApplicatorComponent } from './applicator/applicator.component';
import { ApplicatorRepository } from './applicator/services/applicator-repository';
import { ApplicatorPCMRPDatastore } from './applicator/services/applicator-pcmrp-datastore';
import { ListApplicatorItemComponent } from './applicator/components/list-applicator-item/list-applicator-item.component';
import { ToastrModule } from 'ngx-toastr';
import { TerminalComponent } from './terminal/terminal.component';
import { ShowTerminalComponent } from './terminal/components/show-terminal/show-terminal.component';
import { AddTerminalComponent } from './terminal/components/add-terminal/add-terminal.component';
import { PurchasingComponent } from './purchasing/purchasing.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AddPurchaseComponent } from './purchasing/components/add-purchase/add-purchase.component';
import { PurchaseRequestRepository } from './purchasing/services/purchase-request-repository';
import { ListPurchaseItemComponent } from './purchasing/components/list-purchase-item/list-purchase-item.component';
import { ShowPurchaseComponent } from './purchasing/components/show-purchase/show-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowApplicatorComponent,
    AddApplicatorComponent,
    HeaderComponent,
    HomeComponent,
    ApplicatorComponent,
    ListApplicatorItemComponent,
    TerminalComponent,
    ShowTerminalComponent,
    AddTerminalComponent,
    PurchasingComponent,
    ShippingComponent,
    AddPurchaseComponent,
    ListPurchaseItemComponent,
    ShowPurchaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [
    ApplicatorRepository,
    ApplicatorPCMRPDatastore,
    PurchaseRequestRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
