import { Component, OnInit } from '@angular/core';
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { Tabs } from 'tns-core-modules/ui/tabs';
import { RouterExtensions } from 'nativescript-angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { csms_itemService, csmsitem_dataset } from "./csmsitem_data";

@Component({
    selector: "ns-pos_csmsitem",
    templateUrl: "./pos_csmsitem.component.html",
    styleUrls: ['./../_css/base.component.css'],
    moduleId: module.id,
})
export class pos_csmsitem implements OnInit {
    datalist: Array<csmsitem_dataset>;

    constructor(private _datalistService: csms_itemService, private page: Page) {
        this.page.actionBarHidden = true;
    }

    changeTabs(n): void {
        const tabs = <Tabs>this.page.getViewById("mainTabs");
        tabs.selectedIndex = n;
    }

    ngOnInit(): void {
        this.datalist = this._datalistService.getdatalist();
        this.changeTabs(0);
    }
}