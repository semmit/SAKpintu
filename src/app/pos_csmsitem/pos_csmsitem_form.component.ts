import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { csmsitem_dataset } from "./csmsitem_dataset";
import { csmsitem_datalist } from "./csmsitem_datalist";

@Component({
    selector: "ns-pos_csmsitem_form",
    templateUrl: "./pos_csmsitem_form.component.html",
    styleUrls: ['./../_css/base.component.css']
})
export class pos_csmsitem_form implements OnInit {
    item: csmsitem_dataset;

    constructor(
        private itemService: csmsitem_datalist,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }
}
