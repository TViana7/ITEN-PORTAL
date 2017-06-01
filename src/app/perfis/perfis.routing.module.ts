import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CriarPerfilComponent } from "app/perfis/criar-perfil/criar-perfil.component";
import { EditarPerfilComponent } from "app/perfis/editar-perfil/editar-perfil.component";
import { PerfisComponent } from "app/perfis/perfis.component";


const perfisRoutes = [
    {path: '', component: PerfisComponent, children:[
        {path:'criarperfil', component:CriarPerfilComponent},
        {path:':id/editarperfil', component:EditarPerfilComponent },
    ]}
    
];

@NgModule({

    imports: [RouterModule.forChild(perfisRoutes)],
    exports: [RouterModule]

})
export class PerfisRoutingModule{

}