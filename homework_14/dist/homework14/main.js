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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<schedule></schedule>"

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
        this.title = 'app';
    }
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title\r\n{\r\n    display: block;\r\n    border: 1px solid #bdbdbd;\r\n    border-radius: 5px;\r\n    height: 22px;\r\n    line-height: 22px;\r\n    padding: 4px 2%;\r\n    font-size: 16px;\r\n    color: #bdbdbd;\r\n    margin: 0 auto;\r\n    margin-top: 5%;\r\n    clear:both;\r\n    width: 66%;\r\n    font-weight: 700;\r\n    font-family: Roboto, sans-serif;\r\n}\r\n.title .addClass { float:right }\r\n.title .name { float:left }\r\n.addClass{\r\n  background-color: #bdbdbd;\r\n  color: #e5e5e5;\r\n  width: 50px;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  height: 20px;\r\n  outline: 0;\r\n  cursor: pointer;\r\n}\r\ntable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  /* width: 100%; */\r\n  width: 70%;\r\n  margin: 0 auto;  \r\n}\r\n.AddNew{\r\n  background-color: bisque;\r\n}\r\n.inputs{\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n.buttons{\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-around;\r\n}\r\n.buttons input, .buttons button{\r\n  width: 60px;\r\n}\r\ntd, th {\r\n  border: 1px solid #dddddd;\r\n  text-align: center;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #dddddd;\r\n}\r\n"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <th>#</th>\n    <th>Topic</th>\n    <th>Date</th>\n    <th>Lecturer</th>\n    <th>Actions</th>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"AddNew\">Add new: </td>\n      <td class=\"AddNew\"><input class=\"inputs\" type=\"text\" #topic [value]=\"topicValue\"></td>\n      <td class=\"AddNew\"><input class=\"inputs\" type=\"text\" #date [value]=\"dateValue\"></td>\n      <td class=\"AddNew\"><input class=\"inputs\" type=\"text\" #lecturer [value]=\"lecturerValue\"></td>\n      <td class=\"AddNew\"><input class=\"inputs\" type=\"button\" value=\"Add\" (click)=\"addContact(topic.value, date.value, lecturer.value);topicValue='';dateValue='';lecturerValue='';\"></td>\n    </tr>\n    <tr *ngFor=\"let class of TableData\">\n      <td>{{class.id}}</td>\n      <td *ngIf=\"show\"><input class=\"inputs\" type=\"text\" [(ngModel)]=\"class.topic\"></td>\n      <td *ngIf=\"hide\">{{class.topic}}</td>\n\n      <td *ngIf=\"show\"><input class=\"inputs\" type=\"text\" [(ngModel)]=\"class.date\"></td>\n      <td *ngIf=\"hide\">{{class.date}}</td>\n\n      <td *ngIf=\"show\"><input class=\"inputs\" type=\"text\" [(ngModel)]=\"class.lecturer\"></td>\n      <td *ngIf=\"hide\">{{class.lecturer}}</td>\n\n      <td >\n        <div class=\"buttons\">\n            <button type=\"button\"  (click)=\"toggle()\">{{buttonName}}</button>\n            <input *ngIf=\"hide\" type=\"button\" value=\"Delete\" (click)=\"removeContact(class)\">\n            <input *ngIf=\"show\" type=\"button\" value=\"Discard\"  (click)=\"toggle()\">\n        </div>\n\n      </td>\n    </tr>\n  </tbody>\n\n</table>\n  \n        \n        "

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
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

var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
        this.TableData = [];
        this.show = false;
        this.hide = true;
        this.buttonName = "Edit";
        this.topicValue = " ";
        this.dateValue = " ";
        this.lecturerValue = " ";
        this.TableData = [
            { id: 1, topic: "OOP", date: "13/03/2018", lecturer: "John Doe" },
            { id: 2, topic: "OOP", date: "13/03/2018", lecturer: "John Doe" },
            { id: 3, topic: "OOP", date: "13/03/2018", lecturer: "John Doe" },
            { id: 4, topic: "OOP", date: "13/03/2018", lecturer: "John Doe" }
        ];
    }
    ScheduleComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Save";
        else
            this.buttonName = "Edit";
        this.hide = !this.hide;
    };
    ScheduleComponent.prototype.addContact = function (topic_val, date_val, lecturer_val) {
        if (topic_val === '' && date_val === '' && lecturer_val === '') {
            alert("Fill all inputs!");
            return;
        }
        else {
            var newItem = {
                id: this.TableData.length + 1,
                topic: topic_val,
                date: date_val,
                lecturer: lecturer_val,
            };
            this.TableData.push(newItem);
        }
    };
    ScheduleComponent.prototype.removeContact = function (contact) {
        var index = this.TableData.indexOf(contact);
        this.TableData.splice(index, 1);
    };
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! D:\FL8\homework_14\homework14\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map