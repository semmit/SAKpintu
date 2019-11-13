import { Component, OnInit } from '@angular/core';
import { Fontawesome } from 'nativescript-fontawesome';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'ns-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  search: boolean = false;

  constructor(private page: Page) {
    page.actionBarHidden = false;
  }

  ngOnInit() {
    Fontawesome.init();
  }

  btnSearch() {
    if (this.search === true) {
      this.search = false;
    } else {
      this.search = true;
    }
  }

}
