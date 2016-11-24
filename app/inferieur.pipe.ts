import {Pipe, PipeTransform} from '@angular/core';
import {Livre} from './livre';

@Pipe({name: 'InferieurA'})

export class InferieurAPipe implements PipeTransform {
    transform(items:Livre[], args:string[]):any {
        if (!args[0]) return items; else {
            let maxPrix:number = +args;
            return items.filter(l=> {
                if (l.Prix < maxPrix) return true;
            });
        }
    }
}