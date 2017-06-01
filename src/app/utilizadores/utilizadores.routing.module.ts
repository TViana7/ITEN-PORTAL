import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UtilizadoresComponent } from "app/utilizadores/utilizadores.component";
import { CriarUtilizadorComponent } from "app/utilizadores/criar-utilizador/criar-utilizador.component";





const utilizadoresRoutes = [
    {path: '', component: UtilizadoresComponent, children:[
        {path:'criarutilizador', component:CriarUtilizadorComponent},
    ]}
    
];

@NgModule({

    imports: [RouterModule.forChild(utilizadoresRoutes)],
    exports: [RouterModule]

})
export class UtilizadoresRoutingModule{

}