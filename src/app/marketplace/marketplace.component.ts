import { Component, OnInit } from '@angular/core';
import { Fontawesome } from 'nativescript-fontawesome';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'ns-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./../_css/marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  display_search: boolean = false;
  display_membermenu: boolean = true;

  constructor(private page: Page) {
    page.actionBarHidden = false;
  }

  ngOnInit() {
    Fontawesome.init();
  }

  tap_btnSearch() {
    if (this.display_search === true) {
      this.display_search = false;
    } else {
      this.display_search = true;
    }
  }

}
