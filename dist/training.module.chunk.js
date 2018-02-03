webpackJsonp(["training.module"],{

/***/ "../../../../../src/app/training/current-training/current-training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".current-training {\r\n    padding: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/current-training/current-training.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"current-training\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-progress-spinner mode=\"determinate\" [value]=\"progress\"></mat-progress-spinner>\n  <h1>{{ progress }}%</h1>\n  <p>Keep on going, you can do it!</p>\n  <button mat-raised-button color=\"accent\" (click)=\"onStop()\">Stop</button>\n</section>"

/***/ }),

/***/ "../../../../../src/app/training/current-training/current-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentTrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stop_training_component__ = __webpack_require__("../../../../../src/app/training/current-training/stop-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrentTrainingComponent = /** @class */ (function () {
    function CurrentTrainingComponent(dialog, trainingService) {
        this.dialog = dialog;
        this.trainingService = trainingService;
        this.progress = 0;
    }
    CurrentTrainingComponent.prototype.ngOnInit = function () {
        this.startOrResumeTimer();
    };
    CurrentTrainingComponent.prototype.startOrResumeTimer = function () {
        var _this = this;
        var step = this.trainingService.getRunningExercise().duration * 10;
        this.timer = setInterval(function () {
            _this.progress = _this.progress + 1;
            if (_this.progress >= 100) {
                _this.trainingService.completeExercise();
                clearInterval(_this.timer);
            }
        }, step);
    };
    CurrentTrainingComponent.prototype.onStop = function () {
        var _this = this;
        clearInterval(this.timer);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__stop_training_component__["a" /* StopTrainingComponent */], { data: {
                progress: this.progress
            } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.trainingService.cancelExercise(_this.progress);
            }
            else {
                _this.startOrResumeTimer();
            }
        });
    };
    CurrentTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-current-training',
            template: __webpack_require__("../../../../../src/app/training/current-training/current-training.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/current-training/current-training.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__training_service__["a" /* TrainingService */]])
    ], CurrentTrainingComponent);
    return CurrentTrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/current-training/stop-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopTrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var StopTrainingComponent = /** @class */ (function () {
    function StopTrainingComponent(passedData) {
        this.passedData = passedData;
    }
    StopTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stop-training',
            template: "<h1 mat-dialog-title>Are you sure?</h1>\n                <mat-dialog-content>\n                    <p>You already got {{ passedData.progress }}%</p>\n                </mat-dialog-content>\n                <mat-dialog-actions>\n                    <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n                    <button mat-button [mat-dialog-close]=\"false\">No</button>\n                </mat-dialog-actions>"
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], StopTrainingComponent);
    return StopTrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/new-training/new-training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-training {\r\n    padding: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/new-training/new-training.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"new-training\" fxLayout fxLayoutAlign=\"center\">\n  <form (ngSubmit)=\"onStartTraining(f)\" #f=\"ngForm\">\n    <mat-card fxFlex.xs=\"100%\" fxFlex=\"400px\">\n      <mat-card-title fxLayoutAlign=\"center\">Time to exercise</mat-card-title>\n      <mat-card-content fxLayoutAlign=\"center\">\n        <mat-form-field *ngIf=\"!isLoading\" hideRequiredMarker>\n          <mat-select placeholder=\"Select exercise\" ngModel name=\"exercise\" required>\n            <mat-option *ngFor=\"let exercise of exercises\" [value]=\"exercise.id\">\n              {{ exercise.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n      </mat-card-content>\n      <mat-card-actions *ngIf=\"!isLoading\" fxLayoutAlign=\"center\">\n        <button type=\"submit\" mat-button [disabled]=\"f.invalid\">Start</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/training/new-training/new-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_service__ = __webpack_require__("../../../../../src/app/shared/ui.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewTrainingComponent = /** @class */ (function () {
    function NewTrainingComponent(trainingService, uiService) {
        this.trainingService = trainingService;
        this.uiService = uiService;
        this.isLoading = true;
    }
    NewTrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(function (isLoading) {
            _this.isLoading = isLoading;
        });
        this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(function (exercises) {
            _this.exercises = exercises;
        });
        this.trainingService.fetchAvailableExercises();
    };
    NewTrainingComponent.prototype.onStartTraining = function (form) {
        this.trainingService.startExercise(form.value.exercise);
    };
    NewTrainingComponent.prototype.ngOnDestroy = function () {
        if (this.exerciseSubscription) {
            this.exerciseSubscription.unsubscribe();
        }
        if (this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
        }
    };
    NewTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-training',
            template: __webpack_require__("../../../../../src/app/training/new-training/new-training.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/new-training/new-training.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_service__["a" /* UIService */]])
    ], NewTrainingComponent);
    return NewTrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/past-training/past-training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/past-training/past-training.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\n  <mat-form-field fxFlex=\"40%\">\n    <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n<div fxLayoutAlign=\"center center\">\n  <div fxFlex.gt-md=\"85%\">\n  <mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.date | date }}</mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"calories\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Calories</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.calories | number }}</mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"duration\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Duration</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.duration | number }}</mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"state\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>State</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.state }}</mat-cell>\n    </ng-container>\n  \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/training/past-training/past-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastTrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PastTrainingComponent = /** @class */ (function () {
    function PastTrainingComponent(trainingService) {
        this.trainingService = trainingService;
        this.displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTableDataSource */]();
    }
    PastTrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe(function (exercises) {
            _this.dataSource.data = exercises;
        });
        this.trainingService.fetchCompletedOrCancelledExercises();
    };
    PastTrainingComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        // fetch from template
        this.dataSource.paginator = this.paginator;
    };
    PastTrainingComponent.prototype.doFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PastTrainingComponent.prototype.ngOnDestroy = function () {
        if (this.exChangedSubscription) {
            this.exChangedSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSort */])
    ], PastTrainingComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */])
    ], PastTrainingComponent.prototype, "paginator", void 0);
    PastTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-past-training',
            template: __webpack_require__("../../../../../src/app/training/past-training/past-training.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/past-training/past-training.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__training_service__["a" /* TrainingService */]])
    ], PastTrainingComponent);
    return PastTrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/training-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_component__ = __webpack_require__("../../../../../src/app/training/training.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__training_component__["a" /* TrainingComponent */] }
];
var TrainingRoutingModule = /** @class */ (function () {
    function TrainingRoutingModule() {
    }
    TrainingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], TrainingRoutingModule);
    return TrainingRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/training/training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/training.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"!ongoingTraining\">\n    <mat-tab label=\"New Exercise\">\n      <app-new-training></app-new-training>\n    </mat-tab>\n    <mat-tab label=\"Past Exercises\">\n      <app-past-training></app-past-training>\n    </mat-tab>\n  </mat-tab-group>\n  <app-current-training *ngIf=\"ongoingTraining\"></app-current-training>"

/***/ }),

/***/ "../../../../../src/app/training/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(trainingService) {
        this.trainingService = trainingService;
        this.ongoingTraining = false;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(function (exercise) {
            if (exercise) {
                _this.ongoingTraining = true;
            }
            else {
                _this.ongoingTraining = false;
            }
        });
    };
    TrainingComponent.prototype.ngOnDestroy = function () {
        if (this.exerciseSubscription) {
            this.exerciseSubscription.unsubscribe();
        }
    };
    TrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-training',
            template: __webpack_require__("../../../../../src/app/training/training.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/training.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_component__ = __webpack_require__("../../../../../src/app/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_training_current_training_component__ = __webpack_require__("../../../../../src/app/training/current-training/current-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_training_new_training_component__ = __webpack_require__("../../../../../src/app/training/new-training/new-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__past_training_past_training_component__ = __webpack_require__("../../../../../src/app/training/past-training/past-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__current_training_stop_training_component__ = __webpack_require__("../../../../../src/app/training/current-training/stop-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__training_routing_module__ = __webpack_require__("../../../../../src/app/training/training-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__training_component__["a" /* TrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_2__current_training_current_training_component__["a" /* CurrentTrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_3__new_training_new_training_component__["a" /* NewTrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__past_training_past_training_component__["a" /* PastTrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_5__current_training_stop_training_component__["a" /* StopTrainingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__training_routing_module__["a" /* TrainingRoutingModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__current_training_stop_training_component__["a" /* StopTrainingComponent */]]
            /* add all components that are neither instantiated by template selector nor by routing to entryComponents array (mat-dialog) */
        })
    ], TrainingModule);
    return TrainingModule;
}());



/***/ })

});
//# sourceMappingURL=training.module.chunk.js.map