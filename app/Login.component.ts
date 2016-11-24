import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CompteService} from "./compte.service";
import {NgForm} from "@angular/forms";
@Component({
    selector: 'login',
    templateUrl: "../app/html/Login.html",
    styleUrls: ["../../Content/login.css"],
    styles: [` input.ng-dirty.ng-invalid { border: solid red 2px; !important;} input.ng-dirty.ng-valid { border: solid green 2px; !important;} `]
})
export class LoginComponent {
    constructor(private compteService:CompteService, private router:Router) {
    }

    onSubmit(form:NgForm) {
        console.log('should register:', form.value);
        if (this.compteService.Login(form.value.user, form.value.password)) {
            this.router.navigate(['/LesLivres']);
        }
        form.resetForm();
    }
}