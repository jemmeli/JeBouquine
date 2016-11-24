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
var InferieurAPipe = (function () {
    function InferieurAPipe() {
    }
    InferieurAPipe.prototype.transform = function (items, args) {
        if (!args[0])
            return items;
        else {
            var maxPrix_1 = +args;
            return items.filter(function (l) {
                if (l.Prix < maxPrix_1)
                    return true;
            });
        }
    };
    InferieurAPipe = __decorate([
        core_1.Pipe({ name: 'InferieurA' }), 
        __metadata('design:paramtypes', [])
    ], InferieurAPipe);
    return InferieurAPipe;
}());
exports.InferieurAPipe = InferieurAPipe;
//# sourceMappingURL=inferieur.pipe.js.map