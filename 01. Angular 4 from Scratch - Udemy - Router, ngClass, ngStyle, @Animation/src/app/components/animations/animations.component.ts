import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
    selector: 'app-animations',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css'],
    animations: [
        trigger('myAnimatino', [
            state('small', style({
                //transform: 'scale(1)',
                width: '300px'
            })),
            state('big', style({
                //transform: 'scale(3)',
                width: '600px',
                lineHeight: '300px',
                background: "blue",
                transform: 'rotate(360deg)'
            })),
            transition('small <=> big',
                animate('500ms')

                /*animate('500ms', keyframes([
                    style({ transform: 'rotate(0deg)', offset: 0 }),
                    style({ transform: 'rotate(360deg)', offset: 1 })
                ]))*/
            )
        ])
    ]
})
export class AnimationsComponent implements OnInit {
    stateProperty = 'small';


    constructor() { }

    ngOnInit() {
    }

    animateMe() {
        this.stateProperty = (this.stateProperty === 'small'? 'big' : 'small');
    }

}
