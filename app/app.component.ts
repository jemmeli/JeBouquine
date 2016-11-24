import {Component} from '@angular/core';
import {PanierService} from './panier.service';
import {Livre} from "./livre";

@Component({
    selector: 'je-bouquine',
    templateUrl: "../app/html/index.html",
    styleUrls: ["../../Content/app.css"]
})



export class AppComponent {
    public PanierLivre:Livre[] = [];

    constructor(private panierService:PanierService) {
        this.PanierLivre = this.panierService.Livres;
    }

    CalculerNombreTotalLivre():number {
        let numbre:number = 0;
        for (let item of this.PanierLivre) {
            numbre = numbre + +item.Quantite;
        }
        return numbre;
    }

    CalculerMontantTotal():number {
        let numbre:number = 0;
        for (let item of this.PanierLivre) {
            numbre = numbre + (+item.Quantite * +item.Prix);
        }
        return numbre;
    }

    SupprimerLivre(livre:Livre) {
        this.panierService.SupprimerLivre(livre);
    }
}