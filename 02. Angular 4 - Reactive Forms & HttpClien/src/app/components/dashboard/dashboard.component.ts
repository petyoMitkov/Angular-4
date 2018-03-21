import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Contact } from '../../models/contact-interface';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
    contactsList: Contact[] = [];
    editValue: Contact = {
        id: "",
        person: "",
        city: "",
        occupation: "",
        phone: ""
    }

    @ViewChild(EditFormComponent) child;

    viewEditForm = false;

    constructor(private _dataService: DataService) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this._dataService.initData();
        this.contactsList = this._dataService.contacts;
        console.log(this._dataService.contacts);
    }

    onNewContact(contact: Contact) {
        this.contactsList.unshift(contact);
    }

    deleteRecord(contact: Contact) {
        //if (confirm(`You will delete ${contact.person}.\nAre you sure?`)) {
        this._dataService.deleteContact(contact).subscribe(() => {
            this.contactsList.forEach((cur, index) => {
                if (contact.id === cur.id) {
                    this.contactsList.splice(index, 1);
                }
            })
        });
        //}
        console.log(`Deleted Contact: `);
        console.log(contact);
    }

    edit(contact) {
        this.editValue = contact;
        this.viewEditForm = true;

        if (this.viewEditForm === true) {
            setTimeout(() => {    //<<<---    using ()=> syntax
                this.child.createFormValidationEdit();
            }, 100);
        }
    }



    onUpdatedContact(contact) {
        for (let i in this.contactsList) {
            if (this.contactsList[i].id == contact.id) {
                this.contactsList[i] = contact;
            }
        }
    }

    onEeditCancel(cancel) {
       console.log("Tukaa");
       this.viewEditForm = false;
    }
}
