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


}
