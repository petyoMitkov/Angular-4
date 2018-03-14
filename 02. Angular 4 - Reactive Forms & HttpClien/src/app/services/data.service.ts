import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact } from '../models/contact-interface';

@Injectable()
export class DataService {
    fbUrl = "https://phonebook-f6ac7.firebaseio.com/phonebook.json";
    //fbUrl = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: HttpClient) { }

    getData(): Observable<Contact[]> {
        return this._http.get<Contact[]>(this.fbUrl);
    }




}
