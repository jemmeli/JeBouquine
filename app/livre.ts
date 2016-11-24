export class Livre {
    public Id:string;
    public Nom:string;
    public Auteur:string;
    public Description:string;
    public Langue:string;
    public Prix:number;
    public ISBN:string;
    public MaisonEdition:string;
    public NombrePages:number;
    public Poids:number;
    public Disponibilité:boolean = true;
    public DateSortie:Date = new Date();
    public UrlImage:string = 'http://placehold.it/150x150';
    public Categorie:string;
    public Quantite:number;
    public DateDerniereCommande:Date;

    constructor() {
    }
}