import {Component} from '@angular/core';
import {Personaje} from "../models/personaje.model";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor(private _dbzService: DbzService) {
  }

  public get personajes(): Personaje[] {
    return this._dbzService.personajes;
  }

}
