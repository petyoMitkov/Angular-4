webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".dashboard {\r\n    border: 8px solid rgb(110, 181, 209);\r\n    border-radius: 10px;\r\n    margin-top: 10px;\r\n    padding: 20px 20px 150px 20px;\r\n    animation: fadeInDashboard 1.2s;\r\n}\r\n\r\n.btn:active,\r\n.btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.header {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\r\n}\r\n\r\nli {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n\r\n/* ======= Contacts List =======*/\r\n\r\n.person-name {\r\n    line-height: 10px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\r\n}\r\n\r\n.city-and-occupation {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-style: italic;\r\n    font-weight: 500;\r\n    font-size: 1.1em;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.city-and-occupation :first-child {\r\n    -ms-flex: 1;\r\n        flex: 1;\r\n}\r\n\r\n.city-and-occupation span {\r\n    -ms-flex: 2;\r\n        flex: 2;\r\n}\r\n\r\n.glyphicon-phone-alt {\r\n    font-size: 1.2em;\r\n    color: rgb(102, 102, 102);\r\n    margin-right: 10px;\r\n}\r\n\r\n.phone-holder {\r\n    font-size: 1.4em;\r\n}\r\n\r\n.delete-holder {\r\n    padding: 5px 0 0px 0;\r\n    text-align: right;\r\n}\r\n\r\n\r\n/* ================ Animation ==================== */\r\n\r\n.add-new-item,\r\n.list-group-item {\r\n    animation: fadeIn 1s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n        opacity: 0.5;\r\n        background: rgb(19, 161, 26);\r\n    }\r\n    50% {\r\n        background: rgb(19, 161, 26);\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        background: rgb(255, 255, 255);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeInDashboard {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    99% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .dashboard {\r\n        padding: 0px 0px 150px 0px;\r\n        border: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".form-holder {\r\n    /*border: 1px solid rgb(219, 219, 219);*/\r\n    border-radius: 10px;\r\n    margin: auto;\r\n    margin-bottom: 30px;\r\n    padding: 20px;\r\n    box-shadow: 2px 2px 8px rgb(53, 53, 53);\r\n    overflow: hidden;\r\n}\r\n\r\nlegend {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\r\n}\r\n\r\n\r\n/* ======= Form Validations Styles ======== */\r\n\r\n.form-control.ng-valid.ng-touched {\r\n    border: 1px solid rgb(107, 216, 44) !important;\r\n}\r\n\r\n.form-control.ng-touched.ng-invalid {\r\n    border: 1px solid red !important;\r\n}\r\n\r\nlabel {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\nlabel span {\r\n    -ms-flex: 1;\r\n        flex: 1;\r\n}\r\n\r\n.span-invalid {\r\n    display: inline-block;\r\n    width: 100%;\r\n    position: relative;\r\n    top: -5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 15px;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    background: red;\r\n    color: white;\r\n    z-index: -1;\r\n}\r\n\r\n.input-info {\r\n    color: rgb(158, 158, 158);\r\n    margin: auto;\r\n    font-size: 0.8em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-dashboard></app-dashboard>\n</div>"

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<div class=\"row dashboard\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 header\">\n        <h1>\n            Phone Book with data from Firebase\n        </h1>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-5 col-lg-offset-1 \">\n        <app-form (newContact)=\"onNewContact($event)\"></app-form>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-5\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"let contact of contactsList\" let i=\"index\">\n\n                <h3 class=\"person-name\">{{contact.person}}</h3>\n                <div class=\"city-and-occupation\">\n                    <span> {{contact.city}} </span> <span> {{contact.occupation}} </span>\n                </div>\n\n                <span class=\"glyphicon glyphicon-phone-alt\"></span>\n                <span class=\"phone-holder\"> {{contact.phone}} </span>\n\n\n                <div class=\"delete-holder\">\n\n                    <button disabled type=\"button\" class=\"btn btn-warning\">Edit Contact</button>\n\n                    <button (click)=\"deleteRecord(contact)\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n                </div>\n\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-contact works!\n</p>\n"

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-holder\">\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"postRecord(addForm.value)\" novalidate>\n        <legend>Add Record</legend>\n\n        <!-- Name -->\n        <div class=\"form-group\">\n            <label for=\"\"><span>Name</span> <small class=\"input-info\">required, min 3 chars,only capital letters</small></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n            <span *ngIf=\"addForm.controls['name'].pristine && addForm.controls['name'].touched\n                || addForm.controls['name'].value ==='' && addForm.controls['name'].touched\" class=\"span-invalid\">\n                Name is required.\n            </span>\n            <span *ngIf=\"addForm.controls['name'].hasError('minlength')\" class=\"span-invalid\">\n                Min length 3 chars\n            </span>\n            <span *ngIf=\"addForm.controls['name'].errors?.pattern && !addForm.controls['name'].hasError('minlength')\" class=\"span-invalid\">\n                Only capital letters: IVAN IVANOV\n            </span>\n        </div>\n\n        <!-- City -->\n        <div class=\"form-group\">\n            <label for=\"\"><span>City</span> <small class=\"input-info\">required</small></label>\n            <select name=\"\" class=\"form-control\" formControlName=\"city\">\n                <option value=\"\" disabled=\"true\" [selected]=\"true\">--please select--</option>\n                <option *ngFor=\"let city of selectCityList\" value=\"{{city}}\">\n                    {{city}}\n                </option>\n            </select>\n            <span *ngIf=\"addForm.controls['city'].pristine && addForm.controls['city'].touched\" class=\"span-invalid\">\n                City is required.\n            </span>\n        </div>\n\n        <!-- Occupation -->\n        <div class=\"form-group\">\n            <label for=\"\"><span>Occupation</span> <small class=\"input-info\">required</small></label>\n            <select class=\"form-control\" formControlName=\"occupation\">\n                <option value=\"\" disabled=\"true\" [selected]=\"true\">--please select--</option>\n                <option *ngFor=\"let occupation of selectOccupationList\" value=\"{{occupation}}\">\n                    {{occupation}}\n                </option>\n            </select>\n            <span *ngIf=\"addForm.controls['occupation'].pristine && addForm.controls['occupation'].touched\" class=\"span-invalid\">\n                Occupation is required.\n            </span>\n        </div>\n\n        <!-- Phone -->\n        <div class=\"form-group\">\n            <label for=\"\"><span>Phone</span> <small class=\"input-info\">required, min 6 numbers, start with + or 00, onliy numbers</small></label>\n            <input type=\"tel\" class=\"form-control\" formControlName=\"phone\">\n            <span *ngIf=\"addForm.controls['phone'].pristine && addForm.controls['phone'].touched\" class=\"span-invalid\">\n                Phone is required.\n            </span>\n            <span *ngIf=\"addForm.controls['phone'].hasError('minlength')\" class=\"span-invalid\">\n                Min length is 6 chars\n            </span>\n            <span *ngIf=\"addForm.controls['phone'].errors?.phoneValidatorStart\n                && !addForm.controls['phone'].hasError('minlength')\n                && !addForm.controls['phone'].pristine\" class=\"span-invalid\">\n                Start with \"+\" or \"00\"\n                for example: +35988565487\n            </span>\n            <span *ngIf=\"addForm.controls['phone'].errors?.phoneValidatorOnlyNumbers\n                && !addForm.controls['phone'].hasError('minlength')\n                && !addForm.controls['phone'].pristine\n                && !addForm.controls['phone'].errors?.phoneValidatorStart\" class=\"span-invalid \">\n                Use Only Numbers!\n            </span>\n        </div>\n\n        <div class=\"text-right \">\n            <button type=\"submit \" class=\"btn btn-primary \" [disabled]=\"!addForm.valid \">Add Record</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({ "Content-type": "application/json" })
};
var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this.fbUrl = "https://phonebook-f6ac7.firebaseio.com/phonebook.json";
        //fbUrl = "https://jsonplaceholder.typicode.com/users";
        this.contacts = [];
    }
    DataService.prototype.getData = function () {
        return this._http.get(this.fbUrl);
    };
    DataService.prototype.initData = function () {
        var _this = this;
        this.contacts = [];
        this.getData().subscribe(function (res) {
            for (var key in res) {
                //console.log(key, res[key].person);
                _this.contacts.unshift({
                    id: key,
                    person: res[key].person,
                    phone: res[key].phone,
                    city: res[key].city,
                    occupation: res[key].occupation
                });
            }
        });
        console.log(this.contacts);
    };
    DataService.prototype.postData = function (record) {
        return this._http.post(this.fbUrl, record, httpOptions);
    };
    DataService.prototype.deleteContact = function (contact) {
        return this._http.delete("https://phonebook-f6ac7.firebaseio.com/phonebook/" + contact.id + ".json", httpOptions);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(89);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(147),
        styles: [__webpack_require__(143)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form_form_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_edit_contact_edit_contact_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_edit_contact_edit_contact_component__["a" /* EditContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_dataServise) {
        this._dataServise = _dataServise;
        this.contactsList = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this._dataServise.initData();
        this.contactsList = this._dataServise.contacts;
        console.log(this._dataServise.contacts);
    };
    DashboardComponent.prototype.onNewContact = function (contact) {
        this.contactsList.unshift(contact);
    };
    DashboardComponent.prototype.deleteRecord = function (contact) {
        var _this = this;
        //if (confirm(`You will delete ${contact.person}.\nAre you sure?`)) {
        this._dataServise.deleteContact(contact).subscribe(function () {
            _this.contactsList.forEach(function (cur, index) {
                if (contact.id === cur.id) {
                    _this.contactsList.splice(index, 1);
                }
            });
        });
        //}
        console.log("Deleted Contact: ");
        console.log(contact);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(148),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditContactComponent = (function () {
    function EditContactComponent() {
    }
    EditContactComponent.prototype.ngOnInit = function () {
    };
    return EditContactComponent;
}());
EditContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-edit-contact',
        template: __webpack_require__(149),
        styles: [__webpack_require__(145)]
    }),
    __metadata("design:paramtypes", [])
], EditContactComponent);

//# sourceMappingURL=edit-contact.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = (function () {
    function FormComponent(_dataService, _formBilder) {
        this._dataService = _dataService;
        this._formBilder = _formBilder;
        this.newContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.selectCityList = [
            "Sofia",
            "Vratsa",
            "London",
            "New York"
        ];
        this.selectOccupationList = [
            "Angular Developer",
            "Full Stack Developer",
            "Node.js Developer"
        ];
    }
    FormComponent.prototype.ngOnInit = function () {
        this.createFormValidation();
    };
    FormComponent.prototype.postRecord = function (formData) {
        var _this = this;
        var contact = {
            person: formData.name,
            city: formData.city,
            occupation: formData.occupation,
            phone: formData.phone
        };
        this._dataService.postData(contact).subscribe(function (post) {
            //console.log(post);
            var newId = post[Object.keys(post)[0]];
            _this.newContact.emit({
                id: newId,
                person: contact.person,
                city: contact.city,
                occupation: contact.occupation,
                phone: contact.phone
            });
        }, function (error) { return alert("Some Error occurred. Check your internet connection."); }, 
        // Reset Form
        function () {
            _this.createFormValidation();
        });
    };
    FormComponent.prototype.createFormValidation = function () {
        this.addForm = this._formBilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[A-Z]* *[ A-Z]+")
                ])],
            "city": ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            "occupation": ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            "phone": ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6),
                    this.phoneValidatorStart,
                    this.phoneValidatorOnlyNumbers
                ])]
        });
    };
    // + or 00
    FormComponent.prototype.phoneValidatorStart = function (control) {
        var phoneInput = control.value.trim();
        if (phoneInput[0] === "+" || (phoneInput[0] === "0" && phoneInput[1] === "0")) {
            return null;
        }
        return { 'phoneValidatorStart': { error: true } };
    };
    // Only Numbers
    FormComponent.prototype.phoneValidatorOnlyNumbers = function (control) {
        var phoneInput = control.value.trim();
        var regEx = /^(\+|00)+[0-9]+$/;
        //console.log(regEx.test(phoneInput));
        if (regEx.test(phoneInput)) {
            return null;
        }
        return { 'phoneValidatorOnlyNumbers': { error: true } };
    };
    return FormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _a || Object)
], FormComponent.prototype, "newContact", void 0);
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__(150),
        styles: [__webpack_require__(146)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], FormComponent);

var _a, _b, _c;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[182]);
//# sourceMappingURL=main.bundle.js.map