import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
  selector: 'ns-marketplace-register',
  templateUrl: './marketplace-register.component.html',
  styleUrls: ['./../_css/base.component.css']
})
export class MarketplaceRegisterComponent implements OnInit {

  constructor(private router: Router, private page: Page) {
    this.page.actionBarHidden = false;
  }

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
      this.router.navigate(['/marketplace']).then(()=>{
        alert({ title: "Informasi", message: "Silahkan cek inbox email Anda untuk mengkonfirmasi pendaftaran", okButtonText: "OK" }); return;
      });
    }, (e) => {
    });

    // this.userService.logout();
    // this.routerExtensions.navigate(["/login"], { clearHistory: true });
  }
}
