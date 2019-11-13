import { Component, OnInit } from '@angular/core';
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";

@Component({
  selector: 'ns-marketplace-register',
  templateUrl: './marketplace-register.component.html',
  styleUrls: ['./../_css/marketplace.component.css']
})
export class MarketplaceRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myFunction() {
    console.log("myFunction");
    request({
      url: "https://sp.haloteman.com/API_MAIN/userRegister.php",
      method: "POST",
      headers: {
        "HTTPMethod": "POST",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic"
      },
      content: JSON.stringify({
        "Username": ("#username"),
        "Password": ("#password"),
        "email": ("email"),
        "handphone": ("handphone"),
        "no_ktp": ("no_ktp")
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
}
