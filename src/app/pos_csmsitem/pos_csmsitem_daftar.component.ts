import { Component, OnInit } from "@angular/core";
import { csmsitem_datalist } from "./csmsitem_datalist";
import { csmsitem_dataset } from "./csmsitem_dataset";

@Component({
    selector: "ns-pos_csmsitem_daftar",
    templateUrl: "./pos_csmsitem_daftar.component.html",
    styleUrls: ['./../_css/base.component.css'],
})
export class pos_csmsitem_daftar implements OnInit {
    items: Array<csmsitem_dataset>;

    constructor(private _csmsitem_datalist: csmsitem_datalist) { }

    ngOnInit(): void {
        this.items = this._csmsitem_datalist.getdatalist();
        // console.log(this.items);
    }
}
