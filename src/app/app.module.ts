import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FocusDirective } from "./shared/FocusDirective";

import { pos_csmsitem_daftar } from "./pos-csmsitem/pos-csmsitem-daftar.component";
import { pos_csmsitem_form } from "./pos-csmsitem/pos-csmsitem-form.component";
import { PosDashboardComponent } from './pos-dashboard/pos-dashboard.component';
import { PosCustomerComponent } from './pos-customer/pos-customer.component';

import { NativeScriptMaterialCardViewModule } from 'nativescript-material-cardview/angular';
import { LoginPosComponent } from './login-pos/login-pos.component';
import { LoginMarketplaceComponent } from './login-marketplace/login-marketplace.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MdbInputModule, MdbFooterModule, MdbCardModule, MdbWavesEffectModule } from 'mdb-angular-mobile';
import { MarketplaceRegisterComponent } from './marketplace-register/marketplace-register.component';
import { MarketplaceRegisterConfirmComponent } from './marketplace-register-confirm/marketplace-register-confirm.component';
import { MarketplaceProductInfoComponent } from './marketplace-product-info/marketplace-product-info.component';
import { MarketplaceShortingComponent } from "./marketplace-shorting/marketplace-shorting.component";

import { MarketplaceUserComponent } from "./marketplace-user/marketplace-user.component";
import { MarketplaceUserDataAkunComponent } from "./marketplace-user-datatakun/marketplace-user-datatakun.component";
import { MarketplaceUserDataTokoComponent } from "./marketplace-user-datatoko/marketplace-user-datatoko.component";
import { MarketplaceUserKeranjangComponent } from "./marketplace-user-keranjang/marketplace-user-keranjang.component";
import { MarketplaceUserDaftarOrderComponent } from "./marketplace-user-daftarorder/marketplace-user-daftarorder.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptMaterialCardViewModule,
        FontAwesomeModule,

        MdbInputModule,
        MdbFooterModule,
        MdbCardModule,
        MdbWavesEffectModule
    ],
    declarations: [
        AppComponent,
        FocusDirective,
        pos_csmsitem_daftar,
        pos_csmsitem_form,
        PosDashboardComponent,
        PosCustomerComponent,
        LoginPosComponent,
        LoginMarketplaceComponent,
        MarketplaceComponent,
        MarketplaceRegisterComponent,
        MarketplaceRegisterConfirmComponent,
        MarketplaceProductInfoComponent,
        MarketplaceShortingComponent,
        MarketplaceUserComponent,
        MarketplaceUserDataAkunComponent,
        MarketplaceUserDataTokoComponent,
        MarketplaceUserKeranjangComponent,
        MarketplaceUserDaftarOrderComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
