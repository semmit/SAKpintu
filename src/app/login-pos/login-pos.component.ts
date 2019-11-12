import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures';
import { Page } from 'tns-core-modules/ui/page';

@Component({
    selector: 'ns-login-pos',
    templateUrl: './login-pos.component.html',
    styleUrls: ['./../_css/login.component.css'],
    moduleId: module.id
})
export class LoginPosComponent implements OnInit {

    public direction: number;

    constructor(private router: Router, private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
    }

    onSwipe(args: SwipeGestureEventData) {
        // let item = <StackLayout> args.view;

        // console.log("Swipe!");
        // console.log("Object that triggered the event: " + args.object);
        // console.log("View that triggered the event: " + args.view);
        // console.log("Event name: " + args.eventName);
        // console.log("Swipe Direction: " + args.direction);
        if (args.direction == 1 || args.direction == 2) {
            this.router.navigate(['/login-marketplace']).then(r => 'coba');
        }

        // if (args.direction == 1) {
        //     item.animate({
        //         translate: {
        //             x: 500,
        //             y: 0
        //         },
        //         duration: 700
        //     }).then(() => {
        //         this.router.navigate(['/login-marketplace']).then(r => 'coba');
        //     });
        // } else if (args.direction == 4) {
        //     item.animate({
        //         translate: {
        //             x: 0,
        //             y: 500
        //         },
        //         duration: 700
        //     }).then(() => {
        //         this.router.navigate(['/login-marketplace']).then(r => 'coba');
        //     });
        // }
    }

}
