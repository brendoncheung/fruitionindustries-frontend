import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
    PurchasingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ApplicatorRepository,
    ApplicatorPCMRPDatastore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
