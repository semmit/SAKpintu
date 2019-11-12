import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures';
import { Page } from 'tns-core-modules/ui/page';
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";

@Component({
  selector: 'ns-login-marketplace',
  templateUrl: './login-marketplace.component.html',
  styleUrls: ['./../_css/login.component.css'],
})
export class LoginMarketplaceComponent implements OnInit {

  public direction: number;

  constructor(private router: Router, private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  myFunction() {
    console.log("myFunction");
    request({
      url: "https://sp.haloteman.com/API_MBR/login.php",
      method: "POST",
      headers: {
        "HTTPMethod": "POST",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic"
      },
      content: JSON.stringify({
        "Username": "admin",
        "Password": "admin"
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
    // this.routerExtensions.navigate(["/login"], { clearHistory: true });
  }

  onSwipe(args: SwipeGestureEventData) {
    console.log("Swipe!");
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Swipe Direction: " + args.direction);
    if (args.direction == 1 || args.direction == 2) {
      this.router.navigate(['/login-pos']).then(r => 'coba');
    }
  }

}
