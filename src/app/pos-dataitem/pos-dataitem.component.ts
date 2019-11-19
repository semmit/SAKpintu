import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ns-pos-dataitem',
  templateUrl: './pos-dataitem.component.html',
  styleUrls: ['./../_css/base.component.css'],
  moduleId: module.id,
})
export class PosDataitemComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  dismissKeyboard(args) {
    setTimeout(() => {
      args.object.dismissSoftInput();
    }, 200)
  }

  goBack() {
    this.router.backToPreviousPage;
  }

}
