import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { Page, getViewById, EventData } from 'tns-core-modules/ui/page';
import * as application from "tns-core-modules/application";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { isAndroid } from "tns-core-modules/platform";
import { BarcodeScanner } from "nativescript-barcodescanner";
import * as Toast from 'nativescript-toast';
import * as statusBar from 'nativescript-status-bar'
import { exit } from "nativescript-exit"


@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    webViewSrc = "https://sp.haloteman.com/";
    lastPress = 0;
    let barcodescanner = new BarcodeScanner();

    constructor(private router: Router, private page: Page, private _ngZone: NgZone) {
        this.page.actionBarHidden = true;
        statusBar.hide();
        this.page.on(application.AndroidApplication.activityBackPressedEvent, this.onBackButtonTap, this);
    }

    onBackButtonTap(data: EventData) {
        console.log(data.eventName);
        var date = new Date();
        var timeDelay = 500;
        let options = {
            title: "Warning !",
            message: "Keluar Aplikasi ?",
            okButtonText: "OK"
        };

        if (date.valueOf() - this.lastPress < timeDelay) {
            console.log("exit");
            exit();
        } else {
            // if (this.webView.canGoBack) //if webview can go back
            const webView = <WebView>this.page.getViewById("mainWebView");
            webView.goBack();
            // this._ngZone.run(() => {
            //     this.router.navigate(['/home']);
            // });
            Toast.makeText("Tekan Tombol Back Lagi Untuk Exit Aplikasi", "long").show();
            this.lastPress = date.valueOf();
        }
    }

    //function untuk mengatur gestures zoom in zoom out
    onWebViewLoaded(webargs) {
        const webview = webargs.object;
        if (isAndroid) {
            // Disabled the native zoom control (to enable gestures on Android)
            webview.android.getSettings().setDisplayZoomControls(false);
        }
    }

    onLoadStarted(args: LoadEventData) {
        const webView = args.object as WebView;

        if (!args.error) {
            console.log("Load Start");
            console.log(`EventName: ${args.eventName}`);
            console.log(`NavigationType: ${args.navigationType}`);
            console.log(`Url: ${args.url}`);
        } else {
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
        }
    }

    onLoadFinished(args: LoadEventData) {
        const webView = args.object as WebView;

        if (!args.error) {
            console.log("Load Finished");
            console.log(`EventName: ${args.eventName}`);
            console.log(`NavigationType: ${args.navigationType}`);
            console.log(`Url: ${args.url}`);
        } else {
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
        }
    }

    barcodescanner.scan({
            formats: "QR_CODE, EAN_13",
            cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
            cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
            message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
            showFlipCameraButton: true,   // default false
            preferFrontCamera: false,     // default false
            showTorchButton: true,        // default false
            beepOnScan: true,             // Play or Suppress beep on scan (default true)
            fullScreen: true,             // Currently only used on iOS; with iOS 13 modals are no longer shown fullScreen by default, which may be actually preferred. But to use the old fullScreen appearance, set this to 'true'. Default 'false'.
            torchOn: false,               // launch with the flashlight on (default false)
            closeCallback: () => { console.log("Scanner closed")}, // invoked when the scanner was closed (success or abort)
            resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
            orientation: orientation,     // Android only, default undefined (sensor-driven orientation), other options: portrait|landscape
            openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
            presentInRootViewController: true // iOS-only; If you're sure you're not presenting the (non embedded) scanner in a modal, or are experiencing issues with fi. the navigationbar, set this to 'true' and see if it works better for your app (default false).
          }).then((result) => {
              // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
              alert({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
              });
            }, (errorMessage) => {
              console.log("No scan. " + errorMessage);
            }
          );

}
