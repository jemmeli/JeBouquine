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
var platform_browser_1 = require('@angular/platform-browser');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var accueil_component_1 = require('./accueil.component');
var besoin_aide_component_1 = require('./besoin.aide.component');
var contact_component_1 = require('./contact.component');
var detail_component_1 = require('./detail.component');
var creer_compte_component_1 = require('./creer.compte.component');
var livres_component_1 = require('./livres.component');
var login_component_1 = require('./login.component');
var adresse_component_1 = require('./adresse.component');
//http module
var http_1 = require('@angular/http');
//importer les services
var livres_service_1 = require('./livres.service');
var panier_service_1 = require('./panier.service');
//
var inferieur_pipe_1 = require('./inferieur.pipe');
//
var forms_1 = require('@angular/forms');
var compte_service_1 = require("./compte.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule, forms_1.ReactiveFormsModule, forms_1.FormsModule],
            declarations: [inferieur_pipe_1.InferieurAPipe, app_component_1.AppComponent, accueil_component_1.AccueilComponent, besoin_aide_component_1.BesoinAideComponent, contact_component_1.ContactComponent, detail_component_1.DetailComponent, creer_compte_component_1.CreerCompteComponent, livres_component_1.LivresComponent, login_component_1.LoginComponent, adresse_component_1.AdresseComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [livres_service_1.LivresService, panier_service_1.PanierService, compte_service_1.CompteService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map