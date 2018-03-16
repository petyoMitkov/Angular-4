import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Contact } from '../../models/contact-interface';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    contact: Contact;
    @Output() newContact: EventEmitter<Contact> = new EventEmitter();


    selectCityList: string[] = [
        "-- Select City --",
        "Sofia",
        "Vratsa",
        "London",
        "New York"
    ];

    selectOccupationList: string[] = [
        "-- Select Occupation --",
        "Angular Developer",
        "Full Stack Developer",
        "Node.js Developer"
    ];

    constructor(private _dataService: DataService) { }

    ngOnInit() {
    }

    postRecord(person, city, occupation, phone) {
        if (person === "" || phone === "") {
            alert("Please add Name and Phone");
        } else {
            this._dataService.postData({ person, city, occupation, phone } as Contact).subscribe(post => {
                //console.log(post);
                let newId = post[Object.keys(post)[0]];

                this.newContact.emit({
                    id: newId,
                    person: person,
                    city: city,
                    occupation: occupation,
                    phone: phone });
            });
        }
    }

}
