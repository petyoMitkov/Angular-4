import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-playground-ngclass',
    templateUrl: './playground-ngclass.component.html',
    styleUrls: ['./playground-ngclass.component.css']
})
export class PlaygroundNgclassComponent implements OnInit {
    multipleClasses: Object = {
        'text-center': false,
        'bg-green': false,
        'width-400px': false,
        'select-red': false,
        'select-blue': false,
        'select-orange': false,
        "font-20px": false,
        "font-26px": false,
        "font-32px": false,
        "padding-left-50px": false,
        "padding-right-50px": false,
        "padding-top-50px": false,
        "padding-bottom-50px": false,
        "padding-all-50px": false
    }

    selectColorsList = [
        '-- Select Color --',
        'Red',
        'Blue',
        'Orange'
    ];

    selectTextSizeList = [
        { id: "dummyValue", name: "-- Select Text Size --" },
        { id: "font-20px", name: "20px" },
        { id: "font-26px", name: "26px" },
        { id: "font-32px", name: "32px" }
    ];

    selectPaddingList = [
        { id: "dummyValue", name: "-- Select Text Padding --" },
        { id: "padding-left-50px", name: "Padding Left 50px" },
        { id: "padding-right-50px", name: "Padding Right 50px" },
        { id: "padding-top-50px", name: "Padding Top 50px" },
        { id: "padding-bottom-50px", name: "Padding bottom 50px" },
        { id: "padding-all-50px", name: "Padding All 50px" }
    ]


    constructor() { }

    ngOnInit() {
    }

    //============= Section Checkboxes ==============
    textCenter() {
        this.multipleClasses['text-center'] === false ?
            this.multipleClasses['text-center'] = true :
            this.multipleClasses['text-center'] = false;
    }

    bgGreen() {
        this.multipleClasses['bg-green'] === false ?
            this.multipleClasses['bg-green'] = true :
            this.multipleClasses['bg-green'] = false;
    }

    width400() {
        this.multipleClasses['width-400px'] === false ?
            this.multipleClasses['width-400px'] = true :
            this.multipleClasses['width-400px'] = false;
    }

    //============= Section Select ===================
    setTextColor(color: string) {
        this.multipleClasses['select-red'] = false;
        this.multipleClasses['select-blue'] = false;
        this.multipleClasses['select-orange'] = false;

        if (color == 'Red') {
            this.multipleClasses['select-red'] = true;
        }
        if (color == 'Blue') {
            this.multipleClasses['select-blue'] = true;
        }
        if (color == 'Orange') {
            this.multipleClasses['select-orange'] = true;
        }

        console.log(this.multipleClasses);
    }

    setTextSize(size: string) {
        this.multipleClasses['font-20px'] = false;
        this.multipleClasses['font-26px'] = false;
        this.multipleClasses['font-32px'] = false;

        if (size !== 'dummyValue') {
            this.multipleClasses[size] = true;
        }
    }

    setPadding(classId: string) {
        this.multipleClasses['padding-left-50px'] = false;
        this.multipleClasses['padding-right-50px'] = false;
        this.multipleClasses['padding-top-50px'] = false;
        this.multipleClasses['padding-bottom-50px'] = false;
        this.multipleClasses['padding-all-50px'] = false;

        if (classId !== "dummyValue") {
            this.multipleClasses[classId] = true;
        }
    }

}
