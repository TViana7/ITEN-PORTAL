import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MapaSiteComponent } from "app/configuracoes/mapa-site/mapa-site.component";
import { ConfiguracoesComponent } from "app/configuracoes/configuracoes.component";




const configuracoesRoutes: Routes=[
    {path:'', component: ConfiguracoesComponent},
    {path:'mapasite', component: MapaSiteComponent},
];

@NgModule({

    imports: [RouterModule.forChild(configuracoesRoutes)],
    exports: [RouterModule]

})
export class ConfiguracoesRoutingModule{

}