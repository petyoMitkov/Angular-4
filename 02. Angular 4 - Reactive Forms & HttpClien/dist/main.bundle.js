webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".dashboard {\r\n    border: 8px solid rgb(110, 181, 209);\r\n    border-radius: 10px;\r\n    margin-top: 10px;\r\n    padding: 20px 20px 150px 20px;\r\n    animation: fadeInDashboard 1.2s;\r\n}\r\n\r\n.btn:active,\r\n.btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.header {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\r\n}\r\n\r\nli {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n\r\n/* ======= Contacts List =======*/\r\n\r\n.person-name {\r\n    line-height: 10px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\r\n}\r\n\r\n.city-and-occupation {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-style: italic;\r\n    font-weight: 500;\r\n    font-size: 1.1em;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.city-and-occupation :first-child {\r\n    -ms-flex: 1;\r\n        flex: 1;\r\n}\r\n\r\n.city-and-occupation span {\r\n    -ms-flex: 2;\r\n        flex: 2;\r\n}\r\n\r\n.glyphicon-phone-alt {\r\n    font-size: 1.2em;\r\n    color: rgb(102, 102, 102);\r\n    margin-right: 10px;\r\n}\r\n\r\n.phone-holder {\r\n    font-size: 1.4em;\r\n}\r\n\r\n.delete-holder {\r\n    padding: 5px 0 0px 0;\r\n    text-align: right;\r\n}\r\n\r\n\r\n/* ================ Animation ==================== */\r\n\r\n.add-new-item,\r\n.list-group-item {\r\n    animation: fadeIn 1s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n        opacity: 0.5;\r\n        background: rgb(19, 161, 26);\r\n    }\r\n    50% {\r\n        background: rgb(19, 161, 26);\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        background: rgb(255, 255, 255);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeInDashboard {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    99% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .dashboard {\r\n        padding: 0px 0px 150px 0px;\r\n        border: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".form-holder {\r\n    /*border: 1px solid rgb(219, 219, 219);*/\r\n    border-radius: 10px;\r\n    margin: auto;\r\n    margin-bottom: 30px;\r\n    padding: 20px;\r\n    box-shadow: 2px 2px 8px rgb(53, 53, 53);\r\n    overflow: hidden;\r\n}\r\n\r\nlegend {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-dashboard></app-dashboard>\n</div>"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<div class=\"row dashboard\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 header\">\n        <h1>\n            Phone Book with data from Firebase\n        </h1>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-5 col-lg-offset-1 \">\n        <app-form (newContact)=\"onNewContact($event)\"></app-form>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-5\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"let contact of contactsList\" let i=\"index\">\n\n                <h3 class=\"person-name\">{{contact.person}}</h3>\n                <div class=\"city-and-occupation\">\n                    <span> {{contact.city}} </span> <span> {{contact.occupation}} </span>\n                </div>\n\n                <span class=\"glyphicon glyphicon-phone-alt\"></span>\n                <span class=\"phone-holder\"> {{contact.phone}} </span>\n\n\n                <div class=\"delete-holder\">\n\n                    <button disabled type=\"button\" class=\"btn btn-warning\">Edit Contact</button>\n\n                    <button (click)=\"deleteRecord(contact)\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n                </div>\n\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-holder\">\n    <form action=\"\" (submit)=\"postRecord(person.value, city.value, occupation.value, phone.value)\" novalidate>\n        <legend>Add Record</legend>\n\n        <div class=\"form-group\">\n            <label for=\"\">Name</label>\n            <input #person type=\"text\" class=\"form-control\">\n        </div>\n\n        <!--============================================-->\n\n        <div class=\"form-group\">\n            <label for=\"\">City</label>\n            <select #city name=\"\" class=\"form-control\">\n                <option *ngFor=\"let city of selectCityList\" value=\"{{city}}\">\n                    {{city}}\n                </option>\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"\">Occupation</label>\n            <select #occupation class=\"form-control\">\n                <option *ngFor=\"let occupation of selectOccupationList\" value=\"{{occupation}}\">\n                    {{occupation}}\n                </option>\n            </select>\n        </div>\n\n        <!--============================================-->\n\n        <div class=\"form-group\">\n            <label for=\"\">Phone</label>\n            <input #phone type=\"text\" class=\"form-control\">\n        </div>\n\n        <div class=\"text-right\">\n            <button type=\"submit\" class=\"btn btn-primary \">Add Record</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
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

/***/ 77:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 77;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);




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
        template: __webpack_require__(145),
        styles: [__webpack_require__(142)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form_form_component__ = __webpack_require__(87);
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
            __WEBPACK_IMPORTED_MODULE_7__components_form_form_component__["a" /* FormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(32);
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
        template: __webpack_require__(146),
        styles: [__webpack_require__(143)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(32);
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
    function FormComponent(_dataService) {
        this._dataService = _dataService;
        this.newContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.selectCityList = [
            "-- Select City --",
            "Sofia",
            "Vratsa",
            "London",
            "New York"
        ];
        this.selectOccupationList = [
            "-- Select Occupation --",
            "Angular Developer",
            "Full Stack Developer",
            "Node.js Developer"
        ];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.postRecord = function (person, city, occupation, phone) {
        var _this = this;
        if (person === "" || phone === "") {
            alert("Please add Name and Phone");
        }
        else {
            this._dataService.postData({ person: person, city: city, occupation: occupation, phone: phone }).subscribe(function (post) {
                //console.log(post);
                var newId = post[Object.keys(post)[0]];
                _this.newContact.emit({
                    id: newId,
                    person: person,
                    city: city,
                    occupation: occupation,
                    phone: phone
                });
            });
        }
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
        template: __webpack_require__(147),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], FormComponent);

var _a, _b;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ 88:
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

},[179]);
//# sourceMappingURL=main.bundle.js.map