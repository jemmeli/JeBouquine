import {Injectable} from '@angular/core';
import {Livre} from "./livre";

//service pour panier
@Injectable()
export class PanierService {
    public Livres:Livre[] = [];

    AjouterLivre(livre:Livre) {
        let estNonAjoute = this.EstLivreAjoute(livre.Id);
        if (!estNonAjoute) this.Livres.push(livre); else {
            this.SupprimerLivre(livre);
            this.Livres.push(livre);
        }
    }

    SupprimerLivre(livre:Livre) {
        let index = this.IndexOf(livre);
        if (index != -1) this.Livres.splice(index, 1);
    }

    EstLivreAjoute(id:string):boolean {
        for (let item of this.Livres) {
            if (item.Id == id) {
                return true;
            }
        }
        return false;
    }

    IndexOf(livre:Livre) {
        for (var i = 0; i < this.Livres.length; i++) {
            if (this.Livres[i].Id == livre.Id) {
                return i;
            }
        }
        return -1;
    }
}