import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Page } from 'tns-core-modules/ui/page';
import { Tabs } from 'tns-core-modules/ui/tabs';
import { loginStatusService } from "../shared/loginStatusService";
import { ItemService, Item } from "../shared/item.service";

@Component({
  selector: 'ns-marketplace-product-info',
  templateUrl: './marketplace-product-info.component.html',
  styleUrls: ['./../_css/base.component.css']
})
export class MarketplaceProductInfoComponent implements AfterViewInit, OnInit {
	items: Array<Item>;
  	private _mainContentText: string;
  	display_search: boolean = false;
	display_membermenu: boolean = false;
	subscribe_currentStatus;

  constructor(private _itemService: ItemService, private page: Page, private loginStatus: loginStatusService, private _changeDetectionRef: ChangeDetectorRef) {
    this.page.actionBarHidden = false;
    this.subscribe_currentStatus = this.loginStatus.currentStatus.subscribe(next => {
      this.display_membermenu = next;
    });
  }

  changeTabs(n): void {
        const tabs = <Tabs>this.page.getViewById("mainTabs");
        tabs.selectedIndex = n;
    }

  ngOnInit(): void {
        this.items = this._itemService.getItems();
        this.changeTabs(0);
    }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscribe_currentStatus.unsubscribe();
  }

  tap_btnSearch() {
    if (this.display_search === true) {
      this.display_search = false;
    } else {
      this.display_search = true;
    }
  }

  tap_btnLogout() {
    this.loginStatus.changeStatus(false);
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
