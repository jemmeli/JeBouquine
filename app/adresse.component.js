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
var core_1 = require('@angular/core');
var AdresseComponent = (function () {
    function AdresseComponent() {
        this.clickGoogleMaps = new core_1.EventEmitter();
    }
    AdresseComponent.prototype.onClickGoogleMaps = function () {
        this.clickGoogleMaps.emit(this.adressePostale);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AdresseComponent.prototype, "adressePostale", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AdresseComponent.prototype, "numeroTelephone", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AdresseComponent.prototype, "email", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AdresseComponent.prototype, "clickGoogleMaps", void 0);
    AdresseComponent = __decorate([
        core_1.Component({
            selector: 'adresse',
            template: "\n  <ul class=\"top-contact-details alignleft\">\n  <li class=\"hidden-xs\"> <a title=\"Go to google map\" (click)=\"onClickGoogleMaps()\">\n  <i class=\"fa fa-map-marker\" ></i>\n   <span>{{adressePostale}}</span> </a> </li> \n  <li class=\"hidden-xs\"> <i class=\"fa fa-mobile\"></i><span>{{numeroTelephone}}</span></li>\n   <li> <i class=\"fa fa-envelope\"></i><a href=\"#\">{{email}}</a></li> \n   </ul> \n   ",
            styleUrls: ["../../Content/adresse.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], AdresseComponent);
    return AdresseComponent;
}());
exports.AdresseComponent = AdresseComponent;
//# sourceMappingURL=adresse.component.js.map