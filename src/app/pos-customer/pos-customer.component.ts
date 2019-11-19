import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { DataService, IDataItem } from "../shared/data.service";

@Component({
    selector: "ns-pos-customer",
    templateUrl: './pos-customer.component.html',
  	styleUrls: ['./../_css/base.component.css'],
  	moduleId: module.id,
})
export class PosCustomerComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
