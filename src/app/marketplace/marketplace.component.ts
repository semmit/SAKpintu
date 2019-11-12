import { Component, OnInit } from '@angular/core';
import { Fontawesome } from 'nativescript-fontawesome';

@Component({
  selector: 'ns-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  search: boolean = false;

  constructor() { }

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
