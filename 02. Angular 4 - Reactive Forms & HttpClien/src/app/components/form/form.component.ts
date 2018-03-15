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

    person: string = "";
    phone: string = ""

    constructor(private _dataService: DataService) { }

    ngOnInit() {
    }

    postRecord(person, phone) {
        if (this.person === "" || this.phone === "") {
            alert("Please add Name and Phone");
        } else {
            this._dataService.postData({ person, phone } as Contact).subscribe(post => {
                //console.log(post);
                let newId = post[Object.keys(post)[0]];

                this.newContact.emit({ id: newId, person: person, phone: phone });
            });
        }
        this.person = "";
        this.phone = "";
    }

}
