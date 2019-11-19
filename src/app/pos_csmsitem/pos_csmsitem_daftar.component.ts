import { Component, OnInit } from "@angular/core";
import { csmsitem_datalist } from "./csmsitem_datalist";
import { csmsitem_dataset } from "./csmsitem_dataset";

@Component({
    selector: "ns-pos_csmsitem_daftar",
    templateUrl: "./pos_csmsitem_daftar.component.html",
    styleUrls: ['./../_css/base.component.css']
})
export class pos_csmsitem_daftar implements OnInit {
    datalist: Array<csmsitem_dataset>;

    constructor(private main_datalist: csmsitem_datalist) { }

    ngOnInit(): void {
        this.datalist = this.main_datalist.getdatalist();
    }
}
