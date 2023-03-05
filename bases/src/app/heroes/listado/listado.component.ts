import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[];
  public heroeBorrado: string;

  constructor() {
    this.heroes = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
    this.heroeBorrado = '';
  }

  public borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }


}
