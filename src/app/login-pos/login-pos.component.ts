import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures';
import { Page, getViewById, EventData } from 'tns-core-modules/ui/page';
import * as application from "tns-core-modules/application";
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
  selector: 'ns-login-pos',
  templateUrl: './login-pos.component.html',
  styleUrls: ['./../_css/base.component.css'],
})
export class LoginPosComponent implements OnInit {

  public direction: number;

  constructor(private router: Router, private page: Page, private _ngZone: NgZone) {
    this.page.actionBarHidden = true;
    this.page.on(application.AndroidApplication.activityBackPressedEvent, this.onBackButtonTap, this);
  }

  ngZone() { }
  ngOnInit() {
  }

  validate_login_pos() {
    const inp_kode_toko = <TextField>this.page.getViewById("inp_kode_toko");
    const inp_username = <TextField>this.page.getViewById("inp_username");
    const inp_password = <TextField>this.page.getViewById("inp_password");
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
      let data = response.content.toJSON();
      if (response.statusCode == 404) {
        alert({ title: "Perhatian", message: "Maaf terjadi kegagalan akses ke server (" + response.statusCode + ")", okButtonText: "OK" }); return;
      } else if (response.statusCode !== 200) {
        if (typeof data["responseJSON"] !== "undefined") {
          alert({ title: "Perhatian", message: data["responseJSON"]["message"] + " (" + data["responseJSON"]["code"] + ")", okButtonText: "OK" }); return;
        } else {
          alert({ title: "Perhatian", message: "Koneksi ulang ke server tidak berhasil, silahkan mencoba beberapa saat lagi..  (" + response.statusCode + ")", okButtonText: "OK" }); return;
        }
      } else if (typeof data["success"] !== "undefined" && data["success"] === 0) {
        alert({ title: "Perhatian", message: data["message"], okButtonText: "OK" }); return;
      }
      this.router.navigate(['/pos-dashboard']).then(r => 'coba');
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
    if (args.direction == 1 || args.direction == 2) {
      this.router.navigate(['/login-marketplace']).then(r => 'coba');
    }
    // if (args.direction == 1) {
    //   rootLayout.animate({
    //     translate: { x: 500, y: 0 },
    //     duration: 700
    //   }).then(() => {
    //     this.router.navigate(['/login-marketplace']).then(r => 'coba');
    //   });
    // } else if (args.direction == 2) {
    //   rootLayout.animate({
    //     translate: { x: -500, y: 0 },
    //     duration: 700
    //   }).then(() => {
    //     this.router.navigate(['/login-marketplace']).then(r => 'coba');
    //   });
    // }
  }

  onBackButtonTap(data: EventData) {
    this._ngZone.run(() => {
      this.router.navigate(['/marketplace']).then(r => 'coba');
    });
  }

}
