import { Component, OnInit } from "@angular/core";
import * as application from "tns-core-modules/application";
import * as frame from "tns-core-modules/ui/frame"

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public constructor() { }

    public ngOnInit() {
        application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: any) => {
            const page = frame.topmost().currentPage;
            if (page.hasListeners(application.AndroidApplication.activityBackPressedEvent)) {
                args.cancel = true;
                page.notify({
                    eventName: application.AndroidApplication.activityBackPressedEvent,
                    object: page
                });
            }

        });
    }

}
