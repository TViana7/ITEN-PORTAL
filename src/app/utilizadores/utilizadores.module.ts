import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilizadoresComponent } from './utilizadores.component';
import { CriarUtilizadorComponent } from './criar-utilizador/criar-utilizador.component';
import { UtilizadoresRoutingModule } from "app/utilizadores/utilizadores.routing.module";
import { CriarUtilizadorService } from "app/utilizadores/criar-utilizador/criar-utilizador.service";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { UtilizadoresService } from "app/utilizadores/utilizadores.service";
import { EditarUtilizadorComponent } from './editar-utilizador/editar-utilizador.component';
import { EditarUtilizadorService } from "app/utilizadores/editar-utilizador/editar-utilizador.service";



@NgModule({
  imports: [
    CommonModule,
    UtilizadoresRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,

  ],
  declarations: [UtilizadoresComponent, CriarUtilizadorComponent, EditarUtilizadorComponent],
  providers:[CriarUtilizadorService, UtilizadoresService, EditarUtilizadorService]
})
export class UtilizadoresModule { }
