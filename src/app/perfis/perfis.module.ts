import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfisComponent } from './perfis.component';
import { CriarPerfilComponent } from './criar-perfil/criar-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { PerfisRoutingModule } from "app/perfis/perfis.routing.module";
import { CriarPerfilService } from "app/perfis/criar-perfil/criar-perfil.service";
import { PerfilService } from "app/perfis/perfil.service";
import { EditarPerfilService } from "app/perfis/editar-perfil/editar-perfil.service";



@NgModule({
  imports: [
    CommonModule,
    PerfisRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [PerfisComponent, CriarPerfilComponent, EditarPerfilComponent],
  providers:[CriarPerfilService, PerfilService, EditarPerfilService]
})
export class PerfisModule { }
