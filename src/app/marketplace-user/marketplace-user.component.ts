import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-marketplace-user',
  templateUrl: './marketplace-user.component.html',
  styleUrls: ['./../_css/base.component.css']
})
export class MarketplaceUserComponent implements OnInit {
 search: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  btnSearch() {
    if (this.search === true) {
      this.search = false;
    } else {
      this.search = true;
    }
  }

}

