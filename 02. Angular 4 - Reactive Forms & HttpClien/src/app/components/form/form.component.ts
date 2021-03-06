import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
        "Sofia",
        "Vratsa",
        "London",
        "New York"
    ];

    selectOccupationList: string[] = [
        "Angular Developer",
        "Full Stack Developer",
        "Node.js Developer"
    ];

    addForm: FormGroup;



    constructor(private _dataService: DataService, private _formBilder: FormBuilder) { }

    ngOnInit() {
        this.createFormValidation();
    }

    postRecord(formData) {
        let contact = {
            person: formData.name,
            city: formData.city,
            occupation: formData.occupation,
            phone: formData.phone
        };

        this._dataService.postData(contact).subscribe(
            post => {
                //console.log(post);
                let newId = post[Object.keys(post)[0]];

                this.newContact.emit({
                    id: newId,
                    person: contact.person,
                    city: contact.city,
                    occupation: contact.occupation,
                    phone: contact.phone
                });
            },
            error => alert("Some Error occurred. Check your internet connection."),

            // Reset Form
            () => {
                this.createFormValidation()
            }
        );
    }

    createFormValidation() {
        this.addForm = this._formBilder.group({
            "name": ["", Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.pattern("[A-Z]* *[ A-Z]+")
            ])],
            "city": ["", Validators.required],
            "occupation": ["", Validators.required],
            "phone": ["", Validators.compose([
                Validators.required,
                Validators.minLength(6),
                this.phoneValidatorStart,
                this.phoneValidatorOnlyNumbers
            ])]
        });
    }

    // Custrom Validation + or 00
    phoneValidatorStart(control: FormControl) {
        let phoneInput = control.value.trim();

        if (phoneInput[0] === "+" || (phoneInput[0] === "0" && phoneInput[1] === "0")) {
           return null;
        }
        return { 'phoneValidatorStart': { error: true }};
    }

    // Custrom Validation Only Numbers
    phoneValidatorOnlyNumbers(control: FormControl) {
        let phoneInput = control.value.trim();
        let regEx =/^(\+|00)+[0-9]+$/;

        //console.log(regEx.test(phoneInput));
        if (regEx.test(phoneInput)) {
            return null;
        }
        return { 'phoneValidatorOnlyNumbers':  {error: true}}
    }

}

