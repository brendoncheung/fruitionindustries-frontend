import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddApplicatorComponent } from "../applicator/components/add-applicator/add-applicator.component";
import { ApplicatorComponent } from "../applicator/applicator.component";
import { ShowApplicatorComponent } from "../applicator/components/show-applicator/show-applicator.component";
import { HomeComponent } from "../home/home.component";
import { TerminalComponent } from "../terminal/terminal.component";
import { ShowTerminalComponent } from "../terminal/components/show-terminal/show-terminal.component";
import { AddTerminalComponent } from "../terminal/components/add-terminal/add-terminal.component";
import { PurchasingComponent } from "../purchasing/purchasing.component";
import { ShippingComponent } from "../shipping/shipping.component";
import { AddPurchaseComponent } from "../purchasing/components/add-purchase/add-purchase.component";
import { ShowPurchaseComponent } from "../purchasing/components/show-purchase/show-purchase.component";
import { ArchivePurchaseComponent } from "../purchasing/components/archive-purchase/archive-purchase.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'applicator', component: ApplicatorComponent, children:[
        {path: 'show-applicator', component: ShowApplicatorComponent},
        {path: 'add-applicator', component: AddApplicatorComponent}
    ]},
    {path: 'terminal', component: TerminalComponent, children: [
        {path: 'show-terminal', component: ShowTerminalComponent},
        {path: 'add-terminal', component: AddTerminalComponent},
    ]},
    {path: 'purchasing', component: PurchasingComponent, children: [
        {path: 'add-purchase-request', component: AddPurchaseComponent},
        {path: 'show-purchase-request', component: ShowPurchaseComponent},
        {path: 'archive-purchase-request', component: ArchivePurchaseComponent}
    ]},
    {path: 'shipping', component: ShippingComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}