import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Compte} from "./compte";
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';


@Injectable()
export class CompteService {
    
    private UrlWebApi = 'http://localhost:3000/';
    private http:Http;
    isLoggedIn:boolean = false;
    _compte:Compte = new Compte();
    public loggedIn:Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
    public Compte:Subject<Compte> = new BehaviorSubject<Compte>(this._compte);

    constructor(http:Http) {
        this.http = http;
    }

    CreerNouveauCompte(compte:Compte) {
        console.log("creer nouveau compte", compte);
    }

    Login(user:string, password:string):boolean {
        this.isLoggedIn = true;
        if (user && password) {
            this.isLoggedIn = true;
            this.loggedIn.next(this.isLoggedIn);
            this._compte.Email = 'toto@gmail.fr';
            this._compte.Nom = 'CHAABANE';
            this._compte.Prenom = 'Ramy';
            this.Compte.next(this._compte);
        }
        return this.isLoggedIn;
    }
}