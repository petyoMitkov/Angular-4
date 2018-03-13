import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-style',
    templateUrl: './ng-style.component.html',
    styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
    titleColor = "orange";
    titleBoolean = true;
    multipleStyles = {
        "background": "grey",
        "padding": "50px",
        "font-size": "3em"
    }

    constructor() { }

    ngOnInit() {
    }

}
