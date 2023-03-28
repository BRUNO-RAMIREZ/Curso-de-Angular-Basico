/**
 * Author: Bruno Ramirez
 */
import {Injectable} from "@angular/core";
import {PaisService} from "../services/pais.service";
import {CountryResponse} from "../interfaces/country.interface";
import {Observable} from "rxjs";

@Injectable()
export class PaisFacade {
  constructor(private _paisService: PaisService) {
  }

  public buscarPaisPorNombre(nombre: string): Observable<CountryResponse[]> {
    return this._paisService.buscarPaisPorNombre(nombre);
  }
}
