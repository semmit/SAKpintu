import { Component, OnInit } from '@angular/core';
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { Tabs } from 'tns-core-modules/ui/tabs';
import { RouterExtensions } from 'nativescript-angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ItemService, Item } from "../shared/item.service";

@Component({
    selector: "ns-pos-dataitem",
    templateUrl: './pos-dataitem.component.html',
    styleUrls: ['./../_css/base.component.css'],
    moduleId: module.id,
})
export class PosDataItemComponent implements OnInit {
    items: Array<Item>;

    constructor(private _itemService: ItemService, private page: Page) {
        this.page.actionBarHidden = true;
    }

    changeTabs(n): void {
        const tabs = <Tabs>this.page.getViewById("mainTabs");
        tabs.selectedIndex = n;
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
        this.changeTabs(1); // tampilan tab daftar saat awal buka halaman
    }
}


// import { Component, OnInit } from '@angular/core';
// import { Page, getViewById } from 'tns-core-modules/ui/page';
// import { RouterExtensions } from 'nativescript-angular/router';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { ItemService, Item } from "../shared/item.service";

// @Component({
//     selector: "ns-pos-dataitem",
//     templateUrl: './pos-dataitem.component.html',
//     styleUrls: ['./../_css/base.component.css'],
//     moduleId: module.id,
// })
// export class PosDataItemComponent implements OnInit {
//     items: Array<Item>;

//     constructor(private _itemService: ItemService, private page: Page) { 
//     this.page.actionBarHidden = true;
//     }

//     ngOnInit(): void {
//         this.items = this._itemService.getItems();
//     }
// }