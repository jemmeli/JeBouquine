import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccueilComponent} from './accueil.component';
import {BesoinAideComponent} from './besoin.aide.component';
import {ContactComponent} from './contact.component';
import {DetailComponent} from './detail.component';
import {CreerCompteComponent} from './creer.compte.component';
import {LivresComponent} from './livres.component';
import {LoginComponent} from './login.component';

const appRoutes:Routes = [
    {path: '', component: AccueilComponent},
    {path: 'Accueil', component: AccueilComponent},
    {path: 'BesoinAide', component: BesoinAideComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Detail/:Id', component: DetailComponent},
    {path: 'CreerCompte', component: CreerCompteComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'LesLivres', component: LivresComponent},
    {path: 'LesLivres/:Category', component: LivresComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);