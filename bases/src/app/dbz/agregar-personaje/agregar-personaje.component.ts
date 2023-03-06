import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from "../models/personaje.model";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {
  @Input() personaje: Personaje;

  //@Output() agregarPersonaje: EventEmitter<Personaje>;

  constructor(private _dbzService: DbzService) {
    this.personaje = {
      nombre: '',
      poder: 0
    }
    //this.agregarPersonaje = new EventEmitter<Personaje>();
  }

  public agregar(): void {
    if(this.personaje.nombre.trim().length === 0) {
      return;
    }
    //this.agregarPersonaje.emit(this.personaje);
    this._dbzService.agregar(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0
    }
  }

}
