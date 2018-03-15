import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Contact } from '../../models/contact-interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    contactsList: Contact[] = [];

    constructor(private _dataServise: DataService) { }

    ngOnInit() {
        this._dataServise.initData();
        this.contactsList = this._dataServise.contacts;
        console.log(this._dataServise.contacts);
    }

    onNewContact(contact: Contact) {
        this.contactsList.unshift(contact);
    }

    deleteRecord(contact: Contact) {
        if (confirm(`You will delete ${contact.person}.\nAre you sure?`)) {
            this._dataServise.deleteContact(contact).subscribe(() => {
                this.contactsList.forEach((cur, index) => {
                    if (contact.id === cur.id) {
                        this.contactsList.splice(index,1);
                    }
                })
            });
        }
        console.log(`Deleted Contact: `);
        console.log(contact);
    }


}
