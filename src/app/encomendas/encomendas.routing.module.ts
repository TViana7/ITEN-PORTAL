import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { EncomendasComponent } from "./encomendas.component";
import { EncomendaDatalheComponent } from "./encomenda-datalhe/encomenda-datalhe.component";


const encomendasRoutes: Routes=[
    {path:'', component: EncomendasComponent},
    {path:'/:id', component: EncomendaDatalheComponent},
];

@NgModule({

    imports: [RouterModule.forChild(encomendasRoutes)],
    exports: [RouterModule]

})
export class EncomendasRoutingModule{

}