import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { Tabs } from 'tns-core-modules/ui/tabs';
import { RouterExtensions } from 'nativescript-angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ItemService, Item } from "../shared/item.service";
import { TextView } from "tns-core-modules/ui/text-view";

@Component({
    selector: "ns-pos-dataitem",
    templateUrl: './pos-dataitem.component.html',
    styleUrls: ['./../_css/base.component.css'],
    moduleId: module.id,
})
export class PosDataItemComponent implements AfterViewInit, OnInit {
    private _mainContentText: string;
    items: Array<Item>;

    constructor(private _itemService: ItemService, private page: Page, private _changeDetectionRef: ChangeDetectorRef, private barcodeScanner: BarcodeScanner) {
        this.page.actionBarHidden = true;
    }

    changeTabs(n): void {
        const tabs = <Tabs>this.page.getViewById("mainTabs");
        tabs.selectedIndex = n;
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
        this.changeTabs(0);
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

    public onScan() {
        var count = 0;
        const txt_result = <TextView>this.page.getViewById("txt_result");
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            showFlipCameraButton: false,
            preferFrontCamera: false,
            showTorchButton: true,
            torchOn: false,
            beepOnScan: true,
            resultDisplayDuration: 500,
            // orientation: "landscape",
            openSettingsIfPermissionWasPreviouslyDenied: true, //ios only 
            continuousScanCallback: ((result) => {
                count = count + 1;
                txt_result.text = txt_result.text + "\n" + result.text;
                // console.log(result.format + ": " + result.text + " (count: " + count + ")");
                //     if (count === 3) {
                //         this.barcodeScanner.stop();
                //     }
            }),
        }).then((result) => {
            // txt_result.text = result.text;
        }, (errorMessage) => {
            console.log("Error when scanning " + errorMessage);
        });
    }
}
