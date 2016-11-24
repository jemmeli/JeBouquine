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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
//service pour livre
var LivresService = (function () {
    function LivresService(http) {
        this.UrlWebApi = 'http://localhost:3000/data.livre.json';
        this.http = http;
    }
    LivresService.prototype.RecupererLivres = function () {
        var livres = this.http
            .get(this.UrlWebApi, { headers: this.getHeaders() })
            .map(function (response) { return response.json(); });
        return livres;
    };
    LivresService.prototype.ChercherParId = function (id) {
        var _this = this;
        var liv;
        this.RecupererLivres().subscribe(function (p) {
            _this.Livres = p;
            for (var _i = 0, _a = _this.Livres; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.Id == id) {
                    liv = item;
                }
            }
        }, function (err) {
            console.log(err);
        });
        return liv;
    };
    LivresService.prototype.ChercherParCategorie = function (categorie) {
        var _this = this;
        var livs = [];
        this.RecupererLivres().subscribe(function (p) {
            _this.Livres = p;
            for (var _i = 0, _a = _this.Livres; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.Categorie == categorie) {
                    livs.push(item);
                }
            }
        }, function (err) {
            console.log(err);
        });
        return livs;
    };
    LivresService.prototype.AjouterLivre = function (livre) {
        this.Livres.push(livre);
    };
    LivresService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    LivresService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LivresService);
    return LivresService;
}());
exports.LivresService = LivresService;
//# sourceMappingURL=livres.service.js.map