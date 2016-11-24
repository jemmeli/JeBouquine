"use strict";
var router_1 = require('@angular/router');
var accueil_component_1 = require('./accueil.component');
var besoin_aide_component_1 = require('./besoin.aide.component');
var contact_component_1 = require('./contact.component');
var detail_component_1 = require('./detail.component');
var creer_compte_component_1 = require('./creer.compte.component');
var livres_component_1 = require('./livres.component');
var login_component_1 = require('./login.component');
var appRoutes = [
    { path: '', component: accueil_component_1.AccueilComponent },
    { path: 'Accueil', component: accueil_component_1.AccueilComponent },
    { path: 'BesoinAide', component: besoin_aide_component_1.BesoinAideComponent },
    { path: 'Contact', component: contact_component_1.ContactComponent },
    { path: 'Detail/:Id', component: detail_component_1.DetailComponent },
    { path: 'CreerCompte', component: creer_compte_component_1.CreerCompteComponent },
    { path: 'Login', component: login_component_1.LoginComponent },
    { path: 'LesLivres', component: livres_component_1.LivresComponent },
    { path: 'LesLivres/:Category', component: livres_component_1.LivresComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map