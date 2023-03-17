import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouteReuseStrategy } from "@angular/router";

import { HomeComponent } from "../home/home.component";

import { PurchasingComponent } from "../purchasing/purchasing.component";
import { ShippingComponent } from "../shipping/shipping.component";
import { AddPurchaseComponent } from "../purchasing/components/add-purchase/add-purchase.component";
import { ShowPurchaseComponent } from "../purchasing/components/show-purchase/show-purchase.component";
import { ArchivePurchaseComponent } from "../purchasing/components/archive-purchase/archive-purchase.component";

import { AddApplicatorComponent } from "../wire-tooling/components/add-applicator/add-applicator.component";
import { ShowApplicatorComponent } from "../wire-tooling/components/show-applicator/show-applicator.component";
import { WireToolingComponent } from "../wire-tooling/wire-tooling.component";
import { AddTerminalComponent } from "../wire-tooling/components/add-terminal/add-terminal.component";
import { ShowTerminalComponent } from "../wire-tooling/components/show-terminal/show-terminal.component";
import { SearchToolingComponent } from "../wire-tooling/components/search-tooling/search-tooling.component";
import { RouteStrategy } from "./routestrategy";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'wire-tooling', component: WireToolingComponent, children:[
        {path: 'show-applicator', component: ShowApplicatorComponent},
        {path: 'add-applicator', component: AddApplicatorComponent},
        {path: 'show-terminal', component: ShowTerminalComponent},
        {path: 'add-terminal', component: AddTerminalComponent},
        {path: 'search-tooling', component: SearchToolingComponent}
    ]},
    {path: 'purchasing', component: PurchasingComponent, children: [
        {path: 'add-purchase-request', component: AddPurchaseComponent},
        {path: 'show-purchase-request', component: ShowPurchaseComponent},
        {path: 'archive-purchase-request', component: ArchivePurchaseComponent}
    ]},
    {path: 'shipping', component: ShippingComponent},
    {path: '**', component: HomeComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: [
        {
            provide: RouteReuseStrategy,
            useClass:RouteStrategy
        }
    ]
})
export class AppRoutingModule {

}