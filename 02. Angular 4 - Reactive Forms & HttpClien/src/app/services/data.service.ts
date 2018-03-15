import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';

import { Contact } from '../models/contact-interface';

const httpOptions = {
    headers: new HttpHeaders({ "Content-type": "application/json" })
};

@Injectable()
export class DataService {
    fbUrl = "https://phonebook-f6ac7.firebaseio.com/phonebook.json";
    //fbUrl = "https://jsonplaceholder.typicode.com/users";

    contacts: Contact[] = [];

    constructor(private _http: HttpClient) { }


    getData(): Observable<Contact[]> {
        return this._http.get<Contact[]>(this.fbUrl);
    }

    initData() {
        this.contacts = [];
        this.getData().subscribe(res => {
            for (var key in res) {
                //console.log(key, res[key].person);
                this.contacts.unshift({
                    id: key,
                    person: res[key].person,
                    phone: res[key].phone,
                    city: res[key].city,
                    occupation: res[key].occupation

                })
            }
        })
        console.log(this.contacts);
    }

    postData(record: Contact): Observable<Contact> {
        return this._http.post<Contact>(this.fbUrl, record, httpOptions);
    }

    deleteContact(contact: Contact): Observable<Contact> {
       return this._http.delete<Contact>(`https://phonebook-f6ac7.firebaseio.com/phonebook/${contact.id}.json`, httpOptions);
    }




}
