import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";

@Component({
    selector: 'ns-marketplace-user-daftarorder',
  	templateUrl: './marketplace-user-daftarorder.component.html',
  	styleUrls: ['./marketplace-user-daftarorder.component.css']
})
export class MarketplaceUserDaftarOrderComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
