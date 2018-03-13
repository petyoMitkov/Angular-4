import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-class',
    templateUrl: './ng-class.component.html',
    styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
    titleClass = "red-title";
    titleClassTrueOrFalse = true;
    multipleClasses = {
        "green": true,
        "border": true,
        "padding": true
    };

    constructor() { }

    ngOnInit() {
    }


}
