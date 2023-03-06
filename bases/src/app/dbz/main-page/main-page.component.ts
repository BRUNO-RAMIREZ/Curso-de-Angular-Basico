import { Component } from '@angular/core';
import {Personaje} from "../models/personaje.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public personaje: Personaje;

  constructor() {
    this.personaje = {
      nombre: '',
      poder: 0
    }
  }
}
