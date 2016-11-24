import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CompteService} from "./compte.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Compte} from "./compte";

@Component({
    selector: 'creer-compte',
    templateUrl: "../app/html/CreerCompte.html"
})

export class CreerCompteComponent {
    form:FormGroup;

    constructor(fb:FormBuilder, private compteService:CompteService, private router:Router) {
        this.form = fb.group({
            "Nom": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
            "Prenom": ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
            "Email": ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Password": ["", Validators.required]
        });
    }

    save(model:Compte, isValid:boolean) {
        if (isValid) {
            this.compteService.CreerNouveauCompte(model);
            this.router.navigate(['/LesLivres']);
        }
    }
}