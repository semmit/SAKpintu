import { Component, OnInit } from '@angular/core';
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
  selector: 'ns-marketplace-register',
  templateUrl: './marketplace-register.component.html',
  styleUrls: ['./../_css/base.component.css']
})
export class MarketplaceRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  validate_registrasi() {
    const username = <TextField>this.page.getViewById("inp_username");
    const password = <TextField>this.page.getViewById("inp_password");
    const namalengkap = <TextField>this.page.getViewById("inp_namalengkap");
    const email = <TextField>this.page.getViewById("inp_email");
    const handphone = <TextField>this.page.getViewById("inp_handphone");
    const no_ktp = <TextField>this.page.getViewById("inp_no_ktp");
    request({
      url: "https://sp.haloteman.com/API_MAIN/userRegister.php",
      method: "POST",
      headers: {
        "HTTPMethod": "POST",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic"
      },
      content: JSON.stringify({
                "username": username.text,
                "password": password.text,
                "namalengkap": namalengkap.text,
                "email": email.text,
                "handphone": handphone.text,
                "no_ktp": no_ktp.text,
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
