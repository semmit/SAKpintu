import { Component } from "@angular/core";
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { isAndroid } from "tns-core-modules/platform";
import * as statusBar from 'nativescript-status-bar'

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
	webViewSrc = "https://sp.haloteman.com/";

	constructor( private page: Page) { 
    this.page.actionBarHidden = true;
    statusBar.hide();
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
}
