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


    constructor(private _dataService: DataService) { }

    ngOnInit() {
    }

    postRecord(person, phone) {
       if (!person || !phone) {
            alert("Please add Name and Phone");
        } else {
            this._dataService.postData({ person, phone } as Contact).subscribe( post => {
                //console.log(post);
                //this._dataService.initData();
                this.newContact.emit({person: person, phone: phone});
            });
            console.log(person, phone);
        }
    }

}
