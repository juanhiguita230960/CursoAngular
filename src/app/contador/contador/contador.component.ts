import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
    <h1>{{title}}</h1>

    <h3>Base: {{base}}</h3>
    <button (click) = " acumular (base)"> + {{base}} </button>
    <span> {{ numero }}</span> 
    <button (click) = " acumular(-base)"> - {{base}} </button>
    `
})
export class contadorComponent {
    title = 'bases';
    numero: number = 10;
    base:number = 5;
  
    acumular(valor:number){
      return this.numero += valor;  
    }

}