import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { DataCustomer, IDataCustomer } from "../shared/datacustomer.service";

@Component({
    selector: "ns-pos-customer",
    templateUrl: './pos-customer.component.html',
  	styleUrls: ['./../_css/base.component.css'],
  	moduleId: module.id,
})
export class PosCustomerComponent implements OnInit {
    items: Array<IDataCustomer>;

    constructor(private _itemService: DataCustomer) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
