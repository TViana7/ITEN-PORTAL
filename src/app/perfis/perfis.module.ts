import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfisComponent } from './perfis.component';
import { CriarPerfilComponent } from './criar-perfil/criar-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { PerfisRoutingModule } from "app/perfis/perfis.routing.module";
import { CriarPerfilService } from "app/perfis/criar-perfil/criar-perfil.service";


@NgModule({
  imports: [
    CommonModule,
    PerfisRoutingModule,
    FormsModule
  ],
  declarations: [PerfisComponent, CriarPerfilComponent, EditarPerfilComponent],
  providers:[CriarPerfilService]
})
export class PerfisModule { }
