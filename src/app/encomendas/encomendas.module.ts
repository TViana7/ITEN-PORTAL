import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncomendasComponent } from './encomendas.component';
//import { RouterModule } from "@angular/router";
import { EncomendaDatalheComponent } from './encomenda-datalhe/encomenda-datalhe.component';
import { EncomendasRoutingModule } from "app/encomendas/encomendas.routing.module";

@NgModule({
  imports: [
    CommonModule, EncomendasRoutingModule
  ],
  exports : [],
  declarations: [EncomendasComponent, EncomendaDatalheComponent],
  providers:[]
})
export class EncomendasModule { }
