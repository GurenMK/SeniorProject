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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<importer-form>\n\n</importer-form>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'importer',
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _importer_form_importer_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./importer-form/importer-form.component */ "./src/app/importer-form/importer-form.component.ts");
/* harmony import */ var _file_drop_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-drop.directive */ "./src/app/file-drop.directive.ts");
/* harmony import */ var simple_search_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simple-search-select */ "./node_modules/simple-search-select/fesm5/simple-search-select.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _importer_form_importer_form_component__WEBPACK_IMPORTED_MODULE_6__["ImporterFormComponent"],
                _file_drop_directive__WEBPACK_IMPORTED_MODULE_7__["FileDropDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                simple_search_select__WEBPACK_IMPORTED_MODULE_8__["SimpleSearchSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file-drop.directive.ts":
/*!****************************************!*\
  !*** ./src/app/file-drop.directive.ts ***!
  \****************************************/
/*! exports provided: FileDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileDropDirective = /** @class */ (function () {
    function FileDropDirective() {
        this._overColor = '#999';
        this._defaultColor = '#eee';
        this.background = this._defaultColor;
        // tslint:disable-next-line:no-output-rename
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FileDropDirective.prototype.onDragOver = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.background = this._overColor;
        console.log(e);
    };
    FileDropDirective.prototype.onDragLeave = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.background = this._defaultColor;
    };
    FileDropDirective.prototype.onDrop = function (e) {
        e.preventDefault();
        console.log(e);
        this.background = this._defaultColor;
        var files = e.dataTransfer.files;
        if (this.isAccepted(files)) {
            console.log('in files: ', files);
            this.dropped.emit(files);
        }
        // const files = e.DataTransfers.files;
        console.log('files: ', files);
    };
    FileDropDirective.prototype.isAccepted = function (files) {
        var _this = this;
        if (files.length === 0) {
            console.log('file empty: ', files);
            return false;
        }
        if (!this.accept) {
            console.log('no accept: ', this.accept);
            return true;
        }
        return files.find(function (file) {
            if (Array.isArray(_this.accept)) {
                return !_this.accept.includes(file.type);
            }
            return _this.accept !== file.type;
        }) ? false : true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.background'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileDropDirective.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileDropDirective.prototype, "accept", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onFileDrop'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileDropDirective.prototype, "dropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileDropDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileDropDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileDropDirective.prototype, "onDrop", null);
    FileDropDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[importerFileDrop]',
        })
    ], FileDropDirective);
    return FileDropDirective;
}());



/***/ }),

/***/ "./src/app/importer-form/importer-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/importer-form/importer-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-zone {\n    max-width: 50vw;\n    height: 50vh;\n    display: table;\n    width: 100%;\n    padding: 7px;\n    margin: auto;\n    background-color: #eee;\n    border: dashed 5px #706f6f;\n    border-radius: 10px;\n}\n\n.text-wrapper {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.drop-zone .text-wrapper .message{\n    font-family: sans-serif;\n    font-size: 1.3em;\n    font-weight: bold;\n    color: rgba(14, 13, 13, 0.555)\n}\n\n.text-center {\n    text-align:center;\n}\n\n.hide-drag-placeholder .cdk-drag-placeholder{\n    display: none !important;\n}\n\nform {\n    width: 100%;\n    margin: initial;\n    padding: initial;\n    border-radius: initial;\n}\n\nlabel {\n    text-align: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZXItZm9ybS9pbXBvcnRlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaW1wb3J0ZXItZm9ybS9pbXBvcnRlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcC16b25lIHtcbiAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IGRhc2hlZCA1cHggIzcwNmY2ZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGV4dC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kcm9wLXpvbmUgLnRleHQtd3JhcHBlciAubWVzc2FnZXtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZ2JhKDE0LCAxMywgMTMsIDAuNTU1KVxufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uaGlkZS1kcmFnLXBsYWNlaG9sZGVyIC5jZGstZHJhZy1wbGFjZWhvbGRlcntcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaXRpYWw7XG59XG5cbmxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/importer-form/importer-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/importer-form/importer-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit\">\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <mat-expansion-panel-header>\n            <mat-panel-title>Upload File</mat-panel-title>\n            <mat-panel-description>.tsv</mat-panel-description>\n        </mat-expansion-panel-header>\n        <div cdkDropList \n          class=\"drop-zone\" \n          importerFileDrop\n          (onFileDrop)=\"onFileDrop($event)\">\n          <div class=\"text-wrapper\">\n            <div  class=\"text-center message\">\n              <ng-container *ngIf=\"pool.length == 0; else poolList\">\n                  Drop your file here!\n              </ng-container>\n            </div>\n            <ng-template #poolList>\n              <div *ngFor=\"let item of pool\">\n                {{ item.name}}\n                <button mat-raised-button (click)=\"upload(item)\" *ngIf=\"!uploaded\">Upload</button>\n                <button mat-icon-button *ngIf=\"uploaded\"><mat-icon>check</mat-icon></button>\n                <mat-progress-bar *ngIf=\"isLoading\" mode=\"determinate\" [value]=\"progress$ | async\"></mat-progress-bar>\n              </div>\n            </ng-template>\n          </div>\n      </div>\n      <mat-action-row>\n        <a mat-button color=\"primary\" (click)=\"nextStep()\">Next</a>\n      </mat-action-row>\n    </mat-expansion-panel>\n    <mat-expansion-panel [expanded]=\"step ===1\" (opened)=\"setStep(1)\" hideToggle>\n      <mat-expansion-panel-header>\n        Value Set\n      </mat-expansion-panel-header>\n      <div class=\"flex gutters\">\n        <mat-form-field class=\"flex-item\">\n          <mat-label for=\"resourceType\">Resource Type</mat-label>\n          <input matInput type=\"text\" id=\"resourceType\" [formControlName]=\"fields.resourceType.name\">\n        </mat-form-field>\n        <mat-form-field class=\"flex-item\">\n          <mat-label for=\"publisher\">Publisher</mat-label>\n          <input matInput type=\"text\" id=\"publisher\" [formControlName]=\"fields.publisher.name\">\n        </mat-form-field>\n      </div>\n      <div class=\"flex gutters\">\n        <mat-form-field class=\"flex-item\">\n            <mat-label for=\"valueSetName\">Name</mat-label>\n            <input matInput type=\"text\" id=\"valueSetName\" [formControlName]=\"fields.name.name\">\n        </mat-form-field>\n        <div [formArrayName]=\"fields.contact.name\">\n            <mat-form-field class=\"flex-item\" [formGroupName]=\"0\">\n                <mat-label for=\"contact\">Contact name:</mat-label>\n                <input matInput type=\"text\" id=\"contact\" [formControlName]=\"fields.contact.list[0].name.name\">\n            </mat-form-field>\n        </div>\n      </div>\n      <div class=\"flex gutters\">\n        <mat-form-field class=\"flex-item\">\n          <mat-label for=\"status\">Status</mat-label>\n          <input matInput type=\"text\" id=\"status\" [formControlName]=\"fields.status.name\">\n        </mat-form-field>\n        <mat-form-field class=\"flex-item\">\n            <mat-label for=\"valueSetCodeURL\">Url</mat-label>\n            <input matInput type=\"text\" id=\"valueSetCodeURL\" [formControlName]=\"fields.url.name\">\n        </mat-form-field>\n      </div>\n      <div class=\"flex gutters\">\n        <mat-form-field class=\"flex-item\">\n          <mat-label for=\"version\">Version</mat-label>\n          <input matInput type=\"text\" id=\"version\" [formControlName]=\"fields.version.name\">\n        </mat-form-field>\n        <mat-form-field class=\"flex-item\">\n          <mat-label for=\"copyright\">Copyright</mat-label>\n          <input matInput type=\"text\" id=\"copyright\" [formControlName]=\"fields.copyright.name\">\n        </mat-form-field>\n      </div>\n      <div class=\"flex gutters\">\n          <mat-form-field class=\"flex-item\">\n            <mat-label for=\"description\">Description</mat-label>\n            <textarea matInput id=\"description\" [formControlName]=\"fields.description.name\"></textarea>\n          </mat-form-field>\n      </div>\n      <div class=\"flex gutters\">\n        <mat-form-field class=\"flex-item\">\n          <mat-label for=\"requirements\">Requirements</mat-label>\n          <textarea matInput id=\"requirements\" [formControlName]=\"fields.requirements.name\"></textarea>\n        </mat-form-field>\n      </div>\n      <mat-action-row>\n        <a mat-button color=\"warn\" (click)=\"prevStep()\">Previous</a>\n        <a mat-button color=\"primary\" (click)=\"nextStep()\">Next</a>\n      </mat-action-row>\n    </mat-expansion-panel>\n    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n      <mat-expansion-panel-header>\n        Contents\n      </mat-expansion-panel-header>\n        <div *ngIf=\"fields.codeSystem as codeSystem\" [formGroupName]=\"codeSystem.name\">\n          <div *ngIf=\"codeSystem.group.conceptTemplates as concept\" [formGroupName]=\"concept.name\" >\n            <div class=\"flex gutters\">\n              <div class=\"flex-item\" *ngFor=\"let column of columns\">\n                {{ '[' + column + ']'}}\n              </div>\n            </div>\n            <div class=\"flex gutters\">\n              <mat-form-field class=\"flex-item\">\n                <mat-label>Code</mat-label>\n                <input matInput [formControlName]=\"concept.group.code.name\"/>\n              </mat-form-field>\n            </div>\n            <div class=\"flex gutters\">\n              <mat-form-field class=\"flex-item\">\n                <mat-label>Display</mat-label>\n                <input matInput [formControlName]=\"concept.group.display.name\"/>\n              </mat-form-field>\n            </div>\n            <div class=\"flex gutters\">\n              <mat-form-field class=\"flex-item\">\n                <mat-label>Definition</mat-label>\n                <input matInput [formControlName]=\"concept.group.definition.name\"/>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      <mat-action-row>\n        <a mat-button color=\"warn\" (click)=\"prevStep()\">Previous</a>\n        <button mat-button color=\"primary\" (click)=\"submit()\">Submit</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  </mat-accordion>\n</form>   \n\n\n\n<!-- <div cdkDropList \n    #poolList=\"cdkDropList\" \n    class=\"drop-zone hide-drag-placeholder\" \n    importerFileDrop \n    (cdkDropListEntered)=\"enteredDrop($event)\" >\n    <div *ngFor=\"let item of pool\" (entered)=\"enteredDrop($event)\">\n        {{item}}\n    </div>\n  <div class=\"text-wrapper\">\n    <div class=\"text-center message\">Drop your file here!</div>\n    \n  </div>\n</div>\n\n<div cdkDropList [cdkDropListData]=\"items\" [cdkDropListConnectedTo]=\"[poolList, innerPoolList]\">\n  <div [cdkDragData]=\"item\" \n    *ngFor=\"let item of items\" \n    cdkDrag\n    (cdkDragEntered)=\"enteredDrop($event)\"\n    (cdkDragEnded)=\"dragEnded($event)\">\n    {{item.name}}\n\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/importer-form/importer-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/importer-form/importer-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ImporterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImporterFormComponent", function() { return ImporterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _importer_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importer-form.service */ "./src/app/importer-form/importer-form.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _importer_formgroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./importer-formgroup */ "./src/app/importer-form/importer-formgroup.ts");







var ImporterFormComponent = /** @class */ (function () {
    function ImporterFormComponent(_imf, _fb) {
        this._imf = _imf;
        this._fb = _fb;
        this.pool = [];
        this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.step = 0;
        this.isLoading = false;
        this.simpleSelectValue = null;
        this.formControlSimple = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.columns = [];
        this.fields = _importer_formgroup__WEBPACK_IMPORTED_MODULE_6__["IMPORT_FIELDS"];
        this.form = this._fb.group(this._imf.getGroup(_importer_formgroup__WEBPACK_IMPORTED_MODULE_6__["IMPORT_FIELDS"]));
    }
    Object.defineProperty(ImporterFormComponent.prototype, "contactControls", {
        get: function () { return this.form.get(this.fields.contact.name)[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImporterFormComponent.prototype, "codeSystemControls", {
        get: function () { return this.form.get(this.fields.codeSystem.name); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImporterFormComponent.prototype, "conceptControls", {
        get: function () { return this.codeSystemControls.get(this.fields.codeSystem.group.concept.name); },
        enumerable: true,
        configurable: true
    });
    ImporterFormComponent.prototype.ngOnInit = function () {
    };
    ImporterFormComponent.prototype.submit = function () {
        if (this.form.invalid || this.form.pristine) {
            console.error('form not valids or not touched');
            return;
        }
        console.log(this.form.value);
        this._imf.sendData(this.form.value).subscribe(function (resp) {
            console.log(resp);
        });
    };
    ImporterFormComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ImporterFormComponent.prototype.nextStep = function () {
        this.step++;
    };
    ImporterFormComponent.prototype.prevStep = function () {
        this.step--;
    };
    ImporterFormComponent.prototype.onFileDrop = function (e) {
        console.log(e);
        this.pool = e;
    };
    ImporterFormComponent.prototype.getFormControl = function (name) {
        var control = this.form.get(name);
        if (!control) {
            control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
            this.form.addControl(name, control);
        }
        return control;
    };
    ImporterFormComponent.prototype.upload = function (file) {
        var _this = this;
        var fileUpload = this._imf.upload(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.isLoading = true;
        this.progress$ = fileUpload.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (val) { return Boolean(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var _ = _a[0], progress = _a[1];
            return progress;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.stop$));
        this.progress$.subscribe(function (val) {
            console.log('Progress Bar: ', val);
        });
        fileUpload.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (val) { return Boolean(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var body = _a[0], _ = _a[1];
            return body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (body) { return Boolean(body); })).subscribe(function (data) {
            //   console.log(data);
            _this.data = data;
            _this.isLoading = false;
            _this.codeSystemControls.get(_this.fields.codeSystem.group.conceptData.name).patchValue(data);
            _this.stop$.next();
            _this.setStep(1);
            _this.setColumns(data);
        });
    };
    ImporterFormComponent.prototype.setColumns = function (data) {
        this.columns = Object.keys(data[0]);
    };
    ImporterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'importer-form',
            template: __webpack_require__(/*! ./importer-form.component.html */ "./src/app/importer-form/importer-form.component.html"),
            styles: [__webpack_require__(/*! ./importer-form.component.css */ "./src/app/importer-form/importer-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_importer_form_service__WEBPACK_IMPORTED_MODULE_2__["ImporterFormService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ImporterFormComponent);
    return ImporterFormComponent;
}());



/***/ }),

/***/ "./src/app/importer-form/importer-form.service.ts":
/*!********************************************************!*\
  !*** ./src/app/importer-form/importer-form.service.ts ***!
  \********************************************************/
/*! exports provided: ImporterFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImporterFormService", function() { return ImporterFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ImporterFormService = /** @class */ (function () {
    function ImporterFormService(_http, _fb) {
        var _this = this;
        this._http = _http;
        this._fb = _fb;
        this._fieldToGroupFn = function (fields) {
            return function (acc, key) {
                var field = fields[key];
                switch (true) {
                    case !_this.isObjEmpty(field.group):
                        acc[key] = _this._fb.group(_this.getGroup(field.group));
                        break;
                    case field.list && field.list.length > 0:
                        acc[key] = _this._fb.array(field.list.map(function (item) { return _this._fb.group(_this.getGroup(item)); }));
                        break;
                    default:
                        acc[key] = fields[key].value;
                }
                return acc;
            };
        };
    }
    ImporterFormService.prototype.sendData = function (data) {
        return this._http.post('/api/importer', data);
    };
    ImporterFormService.prototype.upload = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', '/api/importer/files', formData, {
            reportProgress: true,
        });
        return this._http.request(uploadReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            console.log('Http event: ', event);
            console.log('Types: ', _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"]);
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                return [null, Math.round(100 * event.loaded / event.total)];
            }
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                return [event.body, 100];
            }
        }));
    };
    ImporterFormService.prototype.getGroup = function (fields) {
        if (fields == null) {
            return {};
        }
        return Object.keys(fields).reduce(this._fieldToGroupFn(fields), {});
    };
    ImporterFormService.prototype.isObjEmpty = function (obj) {
        if (obj == null || obj === undefined) {
            return true;
        }
        return Object.keys(obj).length === 0;
    };
    ImporterFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ImporterFormService);
    return ImporterFormService;
}());



/***/ }),

/***/ "./src/app/importer-form/importer-formgroup.ts":
/*!*****************************************************!*\
  !*** ./src/app/importer-form/importer-formgroup.ts ***!
  \*****************************************************/
/*! exports provided: IMPORT_FIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPORT_FIELDS", function() { return IMPORT_FIELDS; });
var IMPORT_FIELDS = {
    resourceType: {
        name: 'resourceType',
        value: 'ValueSet'
    },
    meta: {
        name: 'meta',
        group: {
            versionId: {
                name: 'versionId',
                value: 1
            },
            lastUpdated: {
                name: 'lastUpdated',
                value: '2016-04-24T21:29:44.091-04:00'
            }
        }
    },
    url: {
        name: 'url',
        value: 'http://team10fhirportal.com/fhir/ValueSet/AllOrganisms'
    },
    version: {
        name: 'version',
        value: '9.2'
    },
    name: {
        name: 'name'
    },
    status: {
        name: 'status',
        value: 'release'
    },
    publisher: {
        name: 'publisher'
    },
    contact: {
        name: 'contact',
        list: [
            {
                name: {
                    name: 'name',
                    value: 'Team 10'
                }
            }
        ]
    },
    date: {
        name: 'data',
        value: '2019-03-09'
    },
    description: {
        name: 'description',
        value: 'NHSN All Organisms'
    },
    requirements: {
        name: 'requirements',
        value: "This value is published as part of FHIR in order to make the codes available to\n                FHIR terminology services and so implementers can easily leverage the codes."
    },
    copyright: {
        name: 'copyright',
        value: ''
    },
    codeSystem: {
        name: 'codeSystem',
        group: {
            system: {
                name: 'system',
                value: 'http://team10fhirportal.com/fhir/ValueSet/AllOrganisms'
            },
            version: {
                name: 'version',
                value: '9.2'
            },
            caseSensitive: {
                name: 'caseSensitive',
                value: true
            },
            conceptTemplates: {
                name: 'conceptTemplates',
                group: {
                    code: {
                        name: 'code',
                        value: '[code]'
                    },
                    abstract: {
                        name: 'abstract',
                        value: false
                    },
                    display: {
                        name: 'display',
                        value: '[name] - [code]'
                    },
                    definition: {
                        name: 'definition',
                        value: '[name] - [code]'
                    },
                    designation: {
                        name: 'designation',
                        list: [
                            {
                                language: {
                                    name: 'language',
                                    value: 'english'
                                }
                            }
                        ]
                    }
                }
            },
            conceptData: {
                name: 'conceptData'
            },
        }
    }
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map