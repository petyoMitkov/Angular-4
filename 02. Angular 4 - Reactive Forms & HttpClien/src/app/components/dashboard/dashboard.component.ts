import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


import { Contact } from '../../models/contact-interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    contacts: Contact[] = [];

    constructor(private _dataServise: DataService) { }

    ngOnInit() {
        this._dataServise.getData().subscribe(res => {
            //this.contacts = res;
            for (var key in res) {
                console.log(key, res[key].person);

                this.contacts.push({ person: res[key].person, phone: res[key].phone})
            }
            console.log(this.contacts);
        })
    }

}
