import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PosDashboardComponent } from "./pos-dashboard/pos-dashboard.component";
import { PosCustomerComponent } from './pos-customer/pos-customer.component';
import { PosDataItemComponent } from './pos-dataitem/pos-dataitem.component';
import { pos_csmsitem } from './pos_csmsitem/pos_csmsitem.component';

import { LoginPosComponent } from "~/app/login-pos/login-pos.component";
import { LoginMarketplaceComponent } from "~/app/login-marketplace/login-marketplace.component";

import { MarketplaceComponent } from "~/app/marketplace/marketplace.component";
import { MarketplaceRegisterComponent } from "./marketplace-register/marketplace-register.component";
import { MarketplaceProductInfoComponent } from "./marketplace-product-info/marketplace-product-info.component";
import { MarketplaceShortingComponent } from "./marketplace-shorting/marketplace-shorting.component";

import { MarketplaceUserComponent } from "./marketplace-user/marketplace-user.component";
import { MarketplaceUserDataAkunComponent } from "./marketplace-user-datatakun/marketplace-user-datatakun.component";
import { MarketplaceUserDataTokoComponent } from "./marketplace-user-datatoko/marketplace-user-datatoko.component";
import { MarketplaceUserKeranjangComponent } from "./marketplace-user-keranjang/marketplace-user-keranjang.component";
import { MarketplaceUserDaftarOrderComponent } from "./marketplace-user-daftarorder/marketplace-user-daftarorder.component";

const routes: Routes = [
    { path: "", redirectTo: "/pos-dataitem", pathMatch: "full" },
    { path: "pos-dashboard", component: PosDashboardComponent },
    { path: "pos-customer", component: PosCustomerComponent },
    { path: "pos-dataitem", component: PosDataItemComponent },
    { path: "pos_csmsitem", component: pos_csmsitem },
    { path: "login-pos", component: LoginPosComponent },
    { path: "login-marketplace", component: LoginMarketplaceComponent },
    { path: "register-marketplace", component: MarketplaceRegisterComponent },
    { path: "marketplace", component: MarketplaceComponent },
    { path: "marketplace-product-info", component: MarketplaceProductInfoComponent },
    { path: "marketplace-shorting", component: MarketplaceShortingComponent },
    { path: "marketplace-user", component: MarketplaceUserComponent },
    { path: "marketplace-user-datatakun", component: MarketplaceUserDataAkunComponent },
    { path: "marketplace-user-datatoko", component: MarketplaceUserDataTokoComponent },
    { path: "marketplace-user-keranjang", component: MarketplaceUserKeranjangComponent },
    { path: "marketplace-user-daftarorder", component: MarketplaceUserDaftarOrderComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
