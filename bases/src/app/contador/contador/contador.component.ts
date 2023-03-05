import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <article class="contador-container">
      <h1>Contador App</h1>
      <h3>La base es: <strong>{{base}}</strong></h3>

      <section class="contador-buttons">
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{number}}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
      </section>
    </article>
  `
})
export class ContadorComponent {

  public number: number = 10;
  public base: number = 5;

  public acumular(valor: number): void {
    this.number += valor;
  }
}
