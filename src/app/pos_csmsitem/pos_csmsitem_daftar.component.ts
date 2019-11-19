import { Component, OnInit } from "@angular/core";

import { Item } from "./pos_csmsitem_service-int";
import { ItemService } from "./pos_csmsitem_service-dao";

@Component({
    selector: "ns-pos_csmsitem_daftar",
    templateUrl: "./pos_csmsitem_daftar.component.html",
    styleUrls: ['./../_css/base.component.css']
})
export class pos_csmsitem_daftar implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
