import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'adresse',
    template: `
  <ul class="top-contact-details alignleft">
  <li class="hidden-xs"> <a title="Go to google map" (click)="onClickGoogleMaps()">
  <i class="fa fa-map-marker" ></i>
   <span>{{adressePostale}}</span> </a> </li> 
  <li class="hidden-xs"> <i class="fa fa-mobile"></i><span>{{numeroTelephone}}</span></li>
   <li> <i class="fa fa-envelope"></i><a href="#">{{email}}</a></li> 
   </ul> 
   `
    ,styleUrls: ["../../Content/adresse.css"]
})
export class AdresseComponent {
    @Input() adressePostale:string;
    @Input() numeroTelephone:string;
    @Input() email:string;
    @Output() clickGoogleMaps:EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onClickGoogleMaps() {
        this.clickGoogleMaps.emit(this.adressePostale);
    }
}