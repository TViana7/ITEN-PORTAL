import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilizadoresComponent } from './utilizadores.component';
import { CriarUtilizadorComponent } from './criar-utilizador/criar-utilizador.component';
import { UtilizadoresRoutingModule } from "app/utilizadores/utilizadores.routing.module";

@NgModule({
  imports: [
    CommonModule,
    UtilizadoresRoutingModule
  ],
  declarations: [UtilizadoresComponent, CriarUtilizadorComponent]
})
export class UtilizadoresModule { }
