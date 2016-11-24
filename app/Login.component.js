"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var compte_service_1 = require("./compte.service");
var LoginComponent = (function () {
    function LoginComponent(compteService, router) {
        this.compteService = compteService;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function (form) {
        console.log('should register:', form.value);
        if (this.compteService.Login(form.value.user, form.value.password)) {
            this.router.navigate(['/LesLivres']);
        }
        form.resetForm();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: "../app/html/Login.html",
            styleUrls: ["../../Content/login.css"],
            styles: [" input.ng-dirty.ng-invalid { border: solid red 2px; !important;} input.ng-dirty.ng-valid { border: solid green 2px; !important;} "]
        }), 
        __metadata('design:paramtypes', [compte_service_1.CompteService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map