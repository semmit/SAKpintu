import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures';
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

@Component({
  selector: 'ns-login-pos',
  templateUrl: './login-pos.component.html',
  styleUrls: ['./../_css/base.component.css'],
})
export class LoginPosComponent implements OnInit {

  public direction: number;

  constructor(private router: Router, private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  validate_login_pos() {
    const inp_kode_toko: <TextField>this.page.getViewById("inp_kode_toko");
    const inp_username: <TextField>this.page.getViewById("inp_username");
    const inp_password: <TextField>this.page.getViewById("inp_password");
    request({
      url: "https://sp.haloteman.com/API_POS/login.php",
      method: "POST",
      headers: {
        "HTTPMethod": "POST",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic"
      },
      content: JSON.stringify({
        "Kode Toko": inp_kode_toko.text,
        "Username": inp_username.text,
        "Password": inp_password.text,
      })
    }).then((response: HttpResponse) => {
      // Content property of the response is HttpContent
      // The toString method allows you to get the response body as string.
      const str = response.content.toString();
      console.log(str);
      // The toJSON method allows you to parse the received content to JSON object
      // var obj = response.content.toJSON();
      // The toImage method allows you to get the response body as ImageSource.
      // var img = response.content.toImage();
    }, (e) => {
    });

    // this.userService.logout();
    // this.routerExtensions.navigate(["/pos-dashboard"], { clearHistory: true });
  }

  onSwipe(args: SwipeGestureEventData) {
    // console.log("Object that triggered the event: " + args.object);
    // console.log("View that triggered the event: " + args.view);
    // console.log("Event name: " + args.eventName);
    // console.log("Swipe Direction: " + args.direction);
    const rootLayout = <StackLayout>getViewById(args.view, "rootLayout");
    if (args.direction == 1) {
      rootLayout.animate({
        translate: { x: 500, y: 0 },
        duration: 700
      }).then(() => {
        this.router.navigate(['/login-marketplace']).then(r => 'coba');
      });
    } else if (args.direction == 2) {
      rootLayout.animate({
        translate: { x: -500, y: 0 },
        duration: 700
      }).then(() => {
        this.router.navigate(['/login-marketplace']).then(r => 'coba');
      });
    }
  }

}
