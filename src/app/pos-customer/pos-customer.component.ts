import { Component, OnInit } from '@angular/core';
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { DataService, IDataItem } from "../shared/datacustomer.service";

@Component({
    selector: "ns-pos-customer",
    templateUrl: './pos-customer.component.html',
  	styleUrls: ['./../_css/base.component.css'],
  	moduleId: module.id,
})
export class PosCustomerComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService, private page: Page) { 
    this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
