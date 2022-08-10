import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class heroeComponent {

    nombre: string = 'IronMan';
    edad: number = 50;

    get nombreCapitalizado (){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return ` ${ this.nombre } - ${ this.edad }`;
    }

    cambiarHeroe(){
        this.nombre = 'SpiderMan'; 
    }

    cambiarEdad(){
        this.edad = 40;
    }

}