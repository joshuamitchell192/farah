(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/ContactDialog.html":
/*!******************************************!*\
  !*** ./src/app/about/ContactDialog.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Get In Touch</h1>\r\n<div mat-dialog-content>\r\n  <!-- <p>Name</p> -->\r\n  <mat-form-field style=\"width:350px !important\">\r\n    <input matInput placeholder=\"Name\" [(ngModel)]=\"data.name\">\r\n  </mat-form-field>\r\n\r\n  <!-- <p>Email</p> -->\r\n  <mat-form-field style=\"width:350px !important\">\r\n    <input matInput placeholder=\"Email\" [(ngModel)]=\"data.email\">\r\n    <!-- [formControl]=\"data.email\"> -->\r\n    <!-- <mat-error *ngIf=\"emailValidator.invalid\">{{getErrorMessage()}}</mat-error> -->\r\n  </mat-form-field>\r\n\r\n  <!-- <p>Subject</p> -->\r\n  <mat-form-field style=\"width:350px !important\">\r\n    <input matInput placeholder=\"Subject\" [(ngModel)]=\"data.subject\">\r\n  </mat-form-field>\r\n\r\n  <!-- <p>Message</p> -->\r\n  <mat-form-field  style=\"width:350px !important\">\r\n    <textarea matInput placeholder=\"Message\" [(ngModel)]=\"data.message\" style=\"height:100px\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button (click)=\"printData()\" (click)=\"storeData()\" [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-card {\r\n  width:600px;\r\n  height:250px;\r\n  margin-top:50px;\r\n  left:30%;\r\n}\r\n\r\n.center-text {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/Farah_contact.jpg\" style=\"width: 70%; margin-top: 30px; margin-left: 200px\">\r\n\r\n\r\n<div>\r\n  <mat-card class=\"contact-card\">\r\n\r\n    <mat-card-header>\r\n      <mat-card-title >Contact</mat-card-title>\r\n\r\n\r\n\r\n    </mat-card-header>\r\n\r\n    <mat-card-content>\r\n      <p class=\"center-text\">\r\n        <br>\r\n        Collaboration/Inquires\r\n        <br><br>\r\n        Farah B.\r\n        <br>\r\n        Female\r\n        Fashion / Portrait / Event Photographer\r\n        <br><br>\r\n        Gold Coast Australia\r\n        <br><br>\r\n        Email : farahbdn.photography@gmail.com\r\n\r\n      </p>\r\n\r\n      <button mat-raised-button color=\"accent\" (click)=\"openDialog()\">Get in touch</button>\r\n\r\n    </mat-card-content>\r\n\r\n\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent, ContactDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDialog", function() { return ContactDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(dialog) {
        this.dialog = dialog;
        this.emailValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ContactDialog, {
            width: '400px',
            data: { name: this.name, email: this.email, subject: this.subject, message: this.message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.name = result.name;
            _this.email = result.email;
            _this.subject = result.subject;
            _this.message = result.message;
        });
    };
    AboutComponent.prototype.getErrorMessage = function () {
        return this.emailValidator.hasError('required') ? 'You must enter a value' :
            this.emailValidator.hasError('email') ? 'Not a valid email' :
                '';
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AboutComponent);
    return AboutComponent;
}());

var ContactDialog = /** @class */ (function () {
    function ContactDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ContactDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ContactDialog.prototype.printData = function () {
        console.log("Saving user details...\n" + "Name " + this.data.name + "\nEmail " + this.data.email + "\nSubject " + this.data.subject + "\nMessage \n" + this.data.message);
    };
    ContactDialog.prototype.storeData = function () {
        //dataFile = JSON.parse(dataFile)
        //dataFile.push({Name:this.data.name, Email:this.data.email, Subject: this.data.subject, Message: this.data.message})
    };
    ContactDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-dialog',
            template: __webpack_require__(/*! ./ContactDialog.html */ "./src/app/about/ContactDialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ContactDialog);
    return ContactDialog;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Logo Image -->\r\n<div style=\"text-align:center\" padding-top=30px>\r\n  <img alt=\"Logo\" src=\"src\\assets\\Logo.JPG\" style=\"width:40%; height:40%\">\r\n\r\n</div>\r\n\r\n<div style=\"text-align:center\">\r\n\r\n  <!--\r\n\r\n    Home Button\r\n\r\n  -->\r\n\r\n  <button mat-raised-button color=\"link\" style=\"min-width:80px; width:10%; margin-right:15px\"\r\n    (mouseenter)=\"matMenuTrigger.closeMenu()\" (mouseenter)=\"matMenuTriggerAbout.closeMenu()\" routerLink=\"home\">\r\n\r\n    Home\r\n\r\n  </button>\r\n\r\n  <!--\r\n\r\n    About Button\r\n\r\n  -->\r\n\r\n\r\n  <button mat-raised-button color=\"link\" style=\"min-width: 80px; width: 10%; margin-right:15px\" mat-menu.hasBackdrop=false\r\n    [matMenuTriggerFor]=\"about\" #matMenuTriggerAbout=\"matMenuTrigger\" (mouseenter)=\"matMenuTriggerAbout.openMenu()\"\r\n    (mouseenter)=\"matMenuTrigger.closeMenu()\" routerlink=\"about\">\r\n\r\n    About\r\n\r\n  </button>\r\n\r\n\r\n  <!-- menu for about button -->\r\n  <mat-menu hasBackdrop=false #about=\"matMenu\">\r\n    <div (mouseleave)=\"matMenuTriggerAbout.closeMenu()\">\r\n      <button mat-menu-item color=\"primary\" routerLink=\"about\">Contact</button>\r\n    </div>\r\n  </mat-menu>\r\n\r\n\r\n  <!--\r\n\r\n    Series Button\r\n\r\n  -->\r\n\r\n  <button mat-raised-button color=\"link\" style=\"min-width: 80px; width: 10%\"\r\n    [matMenuTriggerFor]=\"menu\" #matMenuTrigger=\"matMenuTrigger\" (mouseenter)=\"matMenuTrigger.openMenu()\"\r\n    (mouseenter)=\"matMenuTriggerAbout.closeMenu()\" >\r\n\r\n    Work\r\n\r\n  </button>\r\n\r\n`<!-- Menu for series button -->\r\n  <mat-menu hasBackdrop=false #menu=\"matMenu\" xPosition=\"after\">\r\n    <div (mouseleave)=\"matMenuTrigger.closeMenu()\">\r\n      <button mat-menu-item routerLink=\"series\">November Series</button>\r\n\r\n    </div>\r\n  </mat-menu>\r\n\r\n\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "farah's website";
    }
    AppComponent.prototype.print = function () {
        console.log("Home Button Entered");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-parallax */ "./node_modules/ngx-parallax/dist/bundle.js");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_parallax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _series_series_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./series/series.component */ "./src/app/series/series.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { FlexLayoutModule } from '@angular/flex-layout';







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
    { path: 'series', component: _series_series_component__WEBPACK_IMPORTED_MODULE_13__["SeriesComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _series_series_component__WEBPACK_IMPORTED_MODULE_13__["SeriesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["ContactDialog"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                // FlexLayoutModule,
                ngx_parallax__WEBPACK_IMPORTED_MODULE_7__["ParallaxModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]
            ],
            providers: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_about_about_component__WEBPACK_IMPORTED_MODULE_12__["ContactDialog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleText {\r\n    position: absolute;\r\n    top:45%;\r\n    left:75%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: white;\r\n    font-size:8vmin;\r\n\r\n\r\n}\r\n.centerText {\r\n    margin-left:30%;\r\n    margin-right:30%;\r\n    font-size:2vmin;\r\n    height:90%;\r\n\r\n}\r\n.centerImages {\r\n  text-align:center;\r\n  width: 600px;\r\n  margin:auto;\r\n\r\n}\r\nimg {\r\n  margin: 20px;\r\n}\r\n.white-icon {\r\n  color: white;\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .centerText {\r\n        margin-left:10%;\r\n        margin-right:10%;\r\n        font-size:2vmin;\r\n    }\r\n}\r\n*[parallax] {\r\n    position:relative;\r\n    width: 100%;\r\n    height:40%;\r\n    min-height:600px;\r\n    text-align:center;\r\n    background-size: 100%;\r\n    margin-top: 1%;\r\n    margin-bottom: 3%;\r\n}\r\n@media screen and (max-width: 1000px) {\r\n    *[parallax] {\r\n        position:relative;\r\n        width: 100%;\r\n        height:40%;\r\n        min-height:500px;\r\n        text-align:center;\r\n        background-size: 100%;\r\n        margin-top: 1%;\r\n        margin-bottom: 3%;\r\n    }\r\n}\r\n@media screen and (max-width: 800px) {\r\n    *[parallax] {\r\n        position:relative;\r\n        width: 100%;\r\n        height:40%;\r\n        min-height:400px;\r\n        text-align:center;\r\n        background-size: 100%;\r\n        margin-top: 1%;\r\n        margin-bottom: 3%;\r\n    }\r\n}\r\n@media screen and (max-width: 650px) {\r\n    *[parallax] {\r\n        position:relative;\r\n        width: 100%;\r\n        height:40%;\r\n        min-height:300px;\r\n        text-align:center;\r\n        background-size: 100%;\r\n        margin-top: 1%;\r\n        margin-bottom: 3%;\r\n    }\r\n}\r\n#title-image {\r\n    background-image: url('farah4.jpg');\r\n}\r\n.secondary-container {\r\n    margin-top:100px;\r\n    margin-bottom: 100px;\r\n}\r\n.footer {\r\n  margin: 100px, 20%, 20%, 100px;\r\n}\r\ntable {\r\n  border-collapse: separate;\r\n  border-spacing: 120px 0;\r\n}\r\ntd {\r\n  padding: 15px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div parallax id=\"title-image\" [config]=\"{initialValue: 0, ratio: .2}\">\r\n\r\n\r\n\r\n    <mat-grid-list cols=\"6\" rowHeight=\"1:1\" style=\"padding-top:15%\">\r\n      <mat-grid-tile>\r\n        <button mat-icon-button color=\"basic\" >\r\n            <mat-icon class=\"white-icon\">arrow_back_ios</mat-icon>\r\n        </button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile [colspan]=4 [rowspan]=1 >\r\n\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <button mat-icon-button color=\"basic\" >\r\n            <mat-icon class=\"white-icon\">arrow_forward_iost</mat-icon>\r\n        </button>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n    <h1 class=\"titleText\">November Series</h1>\r\n</div>\r\n\r\n<div >\r\n  <p class=\"centerText\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum consequat ante, id dignissim sapien lobortis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus elementum augue tempor, egestas erat quis, lacinia libero. Vivamus gravida vulputate dui et varius. Integer interdum augue sed nisi interdum, a venenatis enim laoreet. Donec et accumsan purus.\r\n      Etiam ullamcorper pretium accumsan. Suspendisse enim dolor, facilisis sagittis sem nec, tincidunt mattis dolor. Maecenas condimentum, nisl at consequat commodo, tellus ligula mattis arcu, vel pulvinar sapien justo facilisis massa. Aenean rhoncus dui erat, at gravida ipsum dapibus sit amet. Nullam fermentum velit elit, a rutrum neque consequat sit amet. Maecenas at metus vel metus sodales pharetra et ac nibh.\r\n      <br>\r\n      <br>\r\n      Suspendisse in velit placerat, pulvinar quam nec, molestie nibh. Praesent vestibulum aliquet euismod. Cras blandit, tellus quis laoreet aliquet, arcu erat semper purus, in faucibus sapien arcu in lorem. In egestas, nisi ornare volutpat convallis,\r\n      ligula tortor bibendum sapien, vel fringilla libero ligula ac nisi. Aenean a ullamcorper arcu. Aliquam sit amet placerat ante. Pellentesque eleifend risus at tincidunt sollicitudin. Nullam eget erat vitae dui dapibus facilisis. Sed at interdum dui. Aliquam erat volutpat. Nam vel enim at diam cursus sodales at\r\n      ultrices risus. Donec tristique enim varius urna tempus placerat sed nec sem. Duis rhoncus nec erat hendrerit bibendum. Maecenas sollicitudin velit non nisl ullamcorper, nec accumsan lorem mattis. Phasellus nec nulla ultricies, aliquet nibh quis, congue nunc. Mauris quis gravida erat.\r\n      <br>\r\n      <br>\r\n      Ut sit amet molestie est. Donec tempor orci eu neque eleifend rhoncus. Fusce in dolor fermentum, dapibus nunc vel, molestie augue. Fusce id fermentum ante. Aenean commodo risus magna, mattis euismod nisi euismod non. Pellentesque ultricies orci sapien, dignissim accumsan enim interdum a. Etiam eget nisi vel ex\r\n      laoreet fringilla. Suspendisse sed gravida ante. Nunc sed ante molestie, pellentesque massa ut, ullamcorper tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi sit amet sem ut nibh gravida fermentum sed ut lectus. Nam ac nibh sed elit ultricies sollicitudin eget\r\n      ac lorem. Nam vel tellus nisi. Vestibulum dictum lectus eget leo aliquam, at euismod metus rutrum.\r\n      <br>\r\n      <br>\r\n      Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut faucibus ligula facilisis blandit hendrerit. Proin quis gravida dui. Sed gravida tristique blandit. Sed nec sapien magna. In tincidunt, felis eu tristique ullamcorper, mauris risus mollis lacus, et auctor sapien nisi et ipsum.\r\n      Nulla laoreet ante at tellus hendrerit, id condimentum ligula dictum. Nam augue diam, facilisis in augue vehicula, luctus euismod velit. Nulla sit amet pellentesque ligula. Ut feugiat gravida molestie. In pellentesque, mauris et efficitur laoreet, est nibh consequat orci, quis\r\n      condimentum odio purus et mauris. Pellentesque diam turpis, aliquam at massa nec, egestas dictum quam. Cras semper vitae odio quis ultrices.\r\n      <br>\r\n      <br>\r\n      In suscipit rutrum ullamcorper. Aenean eleifend pulvinar dapibus. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed facilisis ultrices vehicula. Vivamus condimentum faucibus mattis.\r\n      Duis pellentesque porttitor dapibus.\r\n  </p>\r\n</div>\r\n\r\n<!-- <div class='centreImages'>\r\n  <img alt=\"secondary-image\" src='../../assets/farah2.jpg' style=\"margin-left:20%; width:40%; transform: rotate(-90deg)\">\r\n  <img src='../../assets/farah1.jpg' style='margin-left:50%; width:40%'>\r\n</div> -->\r\n\r\n<mat-grid-list cols=\"2\" rowHeight=\"1:1\" style=\"margin-top:100px\">\r\n  <mat-grid-tile>\r\n    <img alt=\"secondary-image\" src='../../assets/farah2.jpg' style=\"margin-left:40%; width:80%; transform: rotate(-90deg)\">\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n      <img src='../../assets/farah1.jpg' style=' margin-right:10%; width:85%'>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n\r\n<footer style='margin-top:200px; display: block; background-color:rgba(248, 248, 248, 0.904)'>\r\n  <mat-divider></mat-divider>\r\n  <table style='padding-left:10%; padding-top:50px; text-align:left'>\r\n    <tr>\r\n      <th>Contact Information</th>\r\n      <th>Burrtios</th>\r\n      <th>Other</th>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n\r\n      <td>\r\n        <a href=\"about\">farahBahudin@gmail.com</a>\r\n      </td>\r\n\r\n      <td>\r\n        🌯🌯🌯\r\n      </td>\r\n\r\n      <td>\r\n\r\n      </td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>\r\n        Mobile: 0427102394\r\n      </td>\r\n    </tr>\r\n\r\n\r\n\r\n\r\n  </table>\r\n\r\n</footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(matMenuModule) {
        this.matMenuModule = matMenuModule;
        this.title = "farah's website";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/series/series.component.css":
/*!*********************************************!*\
  !*** ./src/app/series/series.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/series/series.component.html":
/*!**********************************************!*\
  !*** ./src/app/series/series.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n  Images Div\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/series/series.component.ts":
/*!********************************************!*\
  !*** ./src/app/series/series.component.ts ***!
  \********************************************/
/*! exports provided: SeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesComponent", function() { return SeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeriesComponent = /** @class */ (function () {
    function SeriesComponent() {
    }
    SeriesComponent.prototype.ngOnInit = function () {
    };
    SeriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-series',
            template: __webpack_require__(/*! ./series.component.html */ "./src/app/series/series.component.html"),
            styles: [__webpack_require__(/*! ./series.component.css */ "./src/app/series/series.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeriesComponent);
    return SeriesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Development\web\farah\farah\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map