import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { GestureTypes, TouchAction } from 'tns-core-modules/ui/gestures';

@Directive({ selector: '[focus]' })
export class FocusDirective implements OnInit {
    private defaultColor: string;
    private color = '#000000';
    constructor(private elementRef: ElementRef) {
    }
    ngOnInit(): void {
        const nativeElement = this.elementRef.nativeElement;
        this.defaultColor = nativeElement.color;
        // you can change here a lot of properties not only color
        // nativeElement.on(GestureTypes.touch, ({ action }) => {
        //     switch (action) {
        //         case TouchAction.down: {
        //             nativeElement.color = this.color;
        //             break;
        //         }
        //         case TouchAction.up: {
        //             setTimeout(() => {
        //                 nativeElement.color = this.defaultColor;
        //             }, 80);
        //             break;
        //         }
        //         default: {
        //             nativeElement.color = this.defaultColor;
        //         }
        //     }
        // });
    }
    @Input()
    set focus(color: string) {
        if (color) {
            this.color = color;
        }
    }
}
