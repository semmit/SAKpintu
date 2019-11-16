import { Component, OnInit } from '@angular/core';
import { Fontawesome } from 'nativescript-fontawesome';
import { Page } from 'tns-core-modules/ui/page';
import { loginStatusService } from "../shared/loginStatusService";

@Component({
  selector: 'ns-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./../_css/base.component.css']
})
export class MarketplaceComponent implements OnInit {
  display_search: boolean = false;
  display_membermenu: boolean = false;
  subscribe_currentStatus;

  constructor(private page: Page, private loginStatus: loginStatusService) {
    this.page.actionBarHidden = false;
    this.subscribe_currentStatus = this.loginStatus.currentStatus.subscribe(next => {
      this.display_membermenu = next;
    });
  }

  ngOnInit() {
    Fontawesome.init();
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

}
