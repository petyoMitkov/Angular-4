import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service';
import { Contact } from '../../models/contact-interface';

@Component({
    selector: 'app-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
    @Input() editValue;
    @Output() updatedContact: EventEmitter<Contact> = new EventEmitter();
    @Output() editCancel: EventEmitter<Object> = new EventEmitter();
    cancelSwitch = false;


    editForm: FormGroup;

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

    constructor(private _dataService: DataService, private _formBilder: FormBuilder) { }

    ngOnInit() {
        this.createFormValidationEdit();
    }

    editRecord(contact, id) {
        console.log(contact);
        console.log(id);

        this.updatedContact.emit({
            id: id,
            person: contact.person,
            city: contact.city,
            occupation: contact.occupation,
            phone: contact.phone
        });


        this._dataService.updateContact(contact, id).subscribe(res => {
            console.log(res);
        });
    }

    cancel() {
        this.editCancel.emit({
            cancel: true
        });

    }

    // Edit Validation ===================================
    createFormValidationEdit() {
        this.editForm = this._formBilder.group({
            "person": [`${this.editValue.person}`, Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.pattern("[A-Z]* *[ A-Z]+")
            ])],
            "city": [`${this.editValue.city}`, Validators.required],
            "occupation": [`${this.editValue.occupation}`, Validators.required],
            "phone": [`${this.editValue.phone}`, Validators.compose([
                Validators.required,
                Validators.minLength(6),
                this.phoneValidatorStart,
                this.phoneValidatorOnlyNumbers
            ])]
        });
    }
    //===================================================

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
