import { Component } from "@angular/core";


@Component({

    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})



export class HeroeComponent{
    
    public nombre:string ='batman';
    public edad  :number =45;

    get nombreCapitalizado():string{
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;

    }

    cambiarNombre():void{
        this.nombre='Super Manteco';
    }

    cambiarEdad():void{
        this.edad=53;
    }
}