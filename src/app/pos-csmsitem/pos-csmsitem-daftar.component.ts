import { Component, OnInit } from "@angular/core";

import { Item } from "./pos-csmsitem-service-int";
import { ItemService } from "./pos-csmsitem-service-dao";

@Component({
    selector: "ns-pos-csmsitem-daftar",
    templateUrl: "./pos-csmsitem-daftar.component.html",
    styleUrls: ['./../_css/base.component.css']
})
export class POScsmsItemDaftarComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
