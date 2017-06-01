import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracoesComponent } from './configuracoes.component';
import { MapaSiteComponent } from './mapa-site/mapa-site.component';
import { ConfiguracoesRoutingModule } from "app/configuracoes/configuracoes.routing.module";


@NgModule({
  imports: [
    CommonModule, ConfiguracoesRoutingModule
  ],
  declarations: [MapaSiteComponent]
})
export class ConfiguracoesModule { }
