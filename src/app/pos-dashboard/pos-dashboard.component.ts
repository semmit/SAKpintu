import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'ns-pos-dashboard',
  templateUrl: './pos-dashboard.component.html',
  styleUrls: ['./pos-dashboard.component.css']
})
export class PosDashboardComponent implements OnInit {

  constructor(private page: Page) { 
    // this.page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
