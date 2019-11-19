import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./pos_csmsitem_service-int";
import { ItemService } from "./pos_csmsitem_service-dao";

@Component({
    selector: "ns-pos-csmsitem-form",
    templateUrl: "./pos-csmsitem-form.component.html",
    styleUrls: ['./../_css/base.component.css']
})
export class pos_csmsitem_form implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }
}
