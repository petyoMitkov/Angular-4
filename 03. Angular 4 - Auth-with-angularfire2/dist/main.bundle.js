webpackJsonp([1,4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(afAuth) {
        this.afAuth = afAuth;
        this.res = null;
    }
    AppComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    // Email & Pass
    AppComponent.prototype.emailNewUser = function () {
        var _this = this;
        console.log(this.email);
        console.log(this.password);
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(function (res) {
            _this.res = res.email;
            _this.clearInput();
        })
            .catch(function (err) { return alert(err); });
    };
    AppComponent.prototype.emailLogin = function () {
        console.log(this.email);
        console.log(this.password);
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
        this.clearInput();
    };
    AppComponent.prototype.emailLogout = function () {
        this.afAuth.auth.signOut();
    };
    AppComponent.prototype.clearInput = function () {
        this.email = null;
        this.password = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(174),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(113);
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase, 'my-app'),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, ".holder {\r\n    border: 1px solid #333;\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "Auth with Angular 4 & angularfire2\n<div class=\"holder\">\n    <h1>Auth with Google</h1>\n    <div *ngIf=\"afAuth.authState | async as user; else showLogin\">\n        <h1>Hello {{ user.displayName }}!</h1>\n        <button (click)=\"logout()\">Logout</button>\n    </div>\n    <ng-template #showLogin>\n        <p>Please login.</p>\n        <button (click)=\"login()\">Login with Google</button>\n    </ng-template>\n</div>\n<br>\n<br>\n<div class=\"holder\">\n    <h1>Auth with email & pass</h1>\n    <h1>\n        State:\n        <span *ngIf=\"afAuth.authState | async as res; else showEmaiilLogin\">\n          {{res.email}}\n        </span>\n        <ng-template #showEmaiilLogin>\n            Not Login\n        </ng-template>\n    </h1>\n\n    <div class=\"holder\">\n        <form action=\"\">\n            New User\n            <hr>\n            <label>email</label>\n            <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" id=\"\">\n            <label>password</label>\n            <input type=\"text\" name=\"password\" [(ngModel)]=\"password\" id=\"\">\n            <br>\n            <br>\n            <button (click)=\"emailNewUser()\">New User</button>\n        </form>\n    </div>\n    <br>\n    <div class=\"holder\">\n        <form action=\"\">\n            Login\n            <hr>\n            <label>email</label>\n            <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" id=\"\">\n            <label>password</label>\n            <input type=\"text\" name=\"password\" [(ngModel)]=\"password\" id=\"\">\n            <br>\n            <br>\n            <button (click)=\"emailLogin()\">Log in</button>\n        </form>\n    </div>\n    <br>\n    <button (click)=\"emailLogout()\">=== Log out ===</button>\n</div>"

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAOO8GtbxAOAnxya57rSY8A_Sn0R-vA5Ro",
        authDomain: "auth-with-angularfire2.firebaseapp.com",
        databaseURL: "https://auth-with-angularfire2.firebaseio.com",
        projectId: "auth-with-angularfire2",
        storageBucket: "auth-with-angularfire2.appspot.com",
        messagingSenderId: "682394169369"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(58);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.bundle.js.map