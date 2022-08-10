import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['SpiderMan', 'SuperMan', 'Gatubela']
  heroeBorrado: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    console.log('Borrando heroe..');
    this.heroeBorrado =  this.heroes.pop() || '';
  }
}
