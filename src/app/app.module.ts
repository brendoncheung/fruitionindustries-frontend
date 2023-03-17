import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatNativeDateModule } from '@angular/material/core'
import { MatTableModule } from '@angular/material/table'


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routes/route-module';
import { HomeComponent } from './home/home.component';

import { ToastrModule } from 'ngx-toastr';

import { PurchasingComponent } from './purchasing/purchasing.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AddPurchaseComponent } from './purchasing/components/add-purchase/add-purchase.component';
import { PurchaseRequestRepository } from './purchasing/services/purchase-request-repository';
import { ShowPurchaseComponent } from './purchasing/components/show-purchase/show-purchase.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { FullfilPurchaseModalComponent } from './purchasing/components/fullfil-purchase-modal/fullfil-purchase-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ArchivePurchaseComponent } from './purchasing/components/archive-purchase/archive-purchase.component';
import { WireToolingComponent } from './wire-tooling/wire-tooling.component';
import { SearchToolingComponent } from './wire-tooling/components/search-tooling/search-tooling.component';
import { AddApplicatorComponent } from './wire-tooling/components/add-applicator/add-applicator.component';
import { AddTerminalComponent } from './wire-tooling/components/add-terminal/add-terminal.component';
import { ShowApplicatorComponent } from './wire-tooling/components/show-applicator/show-applicator.component';
import { ShowTerminalComponent } from './wire-tooling/components/show-terminal/show-terminal.component';
import { ApplicatorListItemComponent } from './wire-tooling/components/applicator-list-item/applicator-list-item.component';
import { ApplicatorRepository } from './wire-tooling/service/applicator-repository';
import { TerminalRepository } from './wire-tooling/service/terminal-repository';
import { TerminalListItemComponent } from './wire-tooling/components/terminal-list-item/terminal-list-item.component';
import { ModalAddApplicatorToTerminalComponent } from './wire-tooling/components/modal-add-applicator-to-terminal/modal-add-applicator-to-terminal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ShowApplicatorComponent,
    AddApplicatorComponent,
    HeaderComponent,
    HomeComponent,
    ShowTerminalComponent,
    AddTerminalComponent,
    PurchasingComponent,
    ShippingComponent,
    AddPurchaseComponent,
    ShowPurchaseComponent,
    FullfilPurchaseModalComponent,
    ArchivePurchaseComponent,
    WireToolingComponent,
    SearchToolingComponent,
    ApplicatorListItemComponent,
    TerminalListItemComponent,
    ModalAddApplicatorToTerminalComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: "",
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000
    }),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    PurchaseRequestRepository,
    ApplicatorRepository,
    TerminalRepository,
    NgbActiveModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
