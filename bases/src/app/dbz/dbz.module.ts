import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import {DbzService} from "./services/dbz.service";

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [DbzService],
})
export class DbzModule { }
