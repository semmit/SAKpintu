import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { DataService, IDataItem } from "../shared/datacustomer.service";

@Component({
    selector: "ns-pos-customer",
    templateUrl: './pos-customer.component.html',
  	styleUrls: ['./../_css/base.component.css'],
  	moduleId: module.id,
})
export class PosCustomerComponent implements AfterViewInit, OnInit {
    private _mainContentText: string;
    items: Array<IDataItem>;

    constructor(private _itemService: DataService, private page: Page, private _changeDetectionRef: ChangeDetectorRef) { 
    this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    update() {
        this.ngOnInit(); {
            this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
        }
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }
}
