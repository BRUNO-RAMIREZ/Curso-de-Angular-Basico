import { Injectable } from '@angular/core';
import {Personaje} from "../models/personaje.model";

@Injectable()
export class DbzService {
  private _personajes: Personaje[];

  constructor() {
    this._personajes = [
      {
        nombre: 'Krilin',
        poder: 7500
      },
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 9000
      }
    ];
  }

  public get personajes(): Personaje[] {
    return [...this._personajes];
  }

  public agregar(personaje: Personaje): void {
    this._personajes.push(personaje);
  }
}
