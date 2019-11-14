import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures';
import { Page, getViewById } from 'tns-core-modules/ui/page';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { TextField } from "tns-core-modules/ui/text-field";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-login-marketplace',
  templateUrl: './login-marketplace.component.html',
  styleUrls: ['./../_css/base.component.css'],
})
export class LoginMarketplaceComponent implements OnInit {

  public direction: number;

  constructor(private router: Router, private page: Page, private routerExtensions: RouterExtensions) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  validate_login_mkp() {
    const inp_username = <TextField>this.page.getViewById("inp_username");
    const inp_password = <TextField>this.page.getViewById("inp_password");
    request({
      url: "https://sp.haloteman.com/API_MBR/login.php",
      method: "POST",
      headers: {
        "HTTPMethod": "POST",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic"
      },
      content: JSON.stringify({
        "Username": inp_username.text,
        "Password": inp_password.text,
      })
    }).then((response: HttpResponse) => {
      let data = response.content.toJSON();
      console.log(response.statusCode);
      if (response.statusCode !== 200) {
        alert({ title: "Perhatian", message: "Koneksi ulang ke server tidak berhasil, silahkan mencoba beberapa saat lagi.. ", okButtonText: "OK" }); return;
      } else if (typeof data["success"] !== "undefined" && data["success"] === 0) {
        alert({ title: "Perhatian", message: data["message"], okButtonText: "OK" }); return;
      }
      this.routerExtensions.navigate(["/marketplace"], { clearHistory: true });
    }, (e) => {
    });

    // this.userService.logout();
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
        this.router.navigate(['/login-pos']).then(r => 'coba');
      });
    } else if (args.direction == 2) {
      rootLayout.animate({
        translate: { x: -500, y: 0 },
        duration: 700
      }).then(() => {
        this.router.navigate(['/login-pos']).then(r => 'coba');
      });
    }
  }

}
