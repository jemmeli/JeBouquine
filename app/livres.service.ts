import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Livre} from "./livre";


//service pour livre
@Injectable()
export class LivresService {
    private UrlWebApi = 'http://localhost:3000/data.livre.json';
    private http:Http;
    public Livres:Livre[];

    constructor(http:Http) {
        this.http = http;
    }

    RecupererLivres():Observable<Livre[]> {
        let livres = this.http
            .get(this.UrlWebApi, {headers: this.getHeaders()})
            .map(response => response.json());
        return livres;
    }

    ChercherParId(id:string):Livre {
        let liv:Livre;
        this.RecupererLivres().subscribe(p => {
            this.Livres = p;
            for (let item of this.Livres) {
                if (item.Id == id) {
                    liv = item;
                }
            }
        }, err => {
            console.log(err);
        });
        return liv;
    }

    ChercherParCategorie(categorie:string):Livre[] {
        let livs:Livre[] = [];
        this.RecupererLivres().subscribe(p => {
            this.Livres = p;
            for (let item of this.Livres) {
                if (item.Categorie == categorie) {
                    livs.push(item);
                }
            }
        }, err => {
            console.log(err);
        });
        return livs;
    }

    AjouterLivre(livre:Livre) {
        this.Livres.push(livre);
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}