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
//service pour panier
var PanierService = (function () {
    function PanierService() {
        this.Livres = [];
    }
    PanierService.prototype.AjouterLivre = function (livre) {
        var estNonAjoute = this.EstLivreAjoute(livre.Id);
        if (!estNonAjoute)
            this.Livres.push(livre);
        else {
            this.SupprimerLivre(livre);
            this.Livres.push(livre);
        }
    };
    PanierService.prototype.SupprimerLivre = function (livre) {
        var index = this.IndexOf(livre);
        if (index != -1)
            this.Livres.splice(index, 1);
    };
    PanierService.prototype.EstLivreAjoute = function (id) {
        for (var _i = 0, _a = this.Livres; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Id == id) {
                return true;
            }
        }
        return false;
    };
    PanierService.prototype.IndexOf = function (livre) {
        for (var i = 0; i < this.Livres.length; i++) {
            if (this.Livres[i].Id == livre.Id) {
                return i;
            }
        }
        return -1;
    };
    PanierService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PanierService);
    return PanierService;
}());
exports.PanierService = PanierService;
//# sourceMappingURL=panier.service.js.map