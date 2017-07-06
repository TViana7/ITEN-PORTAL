
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { AppComponent } from "app/app.component";
import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/login/login.component";
import { AuthGuard } from "app/guards/auth.guard";
import { PerfisComponent } from "app/perfis/perfis.component";
import { PerfisModule } from "app/perfis/perfis.module";
import { CriarPerfilComponent } from "app/perfis/criar-perfil/criar-perfil.component";
import { CriarUtilizadorComponent } from "app/utilizadores/criar-utilizador/criar-utilizador.component";
import { UtilizadoresComponent } from "app/utilizadores/utilizadores.component";
//import { EncomendasComponent } from "app/encomendas/encomendas.component";
//import { EncomendaDatalheComponent } from "app/encomendas/encomenda-datalhe/encomenda-datalhe.component";


const appRoutes: Routes=[
    {path:'encomendas', loadChildren:'app/encomendas/encomendas.module#EncomendasModule',
        canActivate:[AuthGuard]},
    /*{path:'perfis', loadChildren:'app/perfis/perfis.module#PerfisModule',
        canActivate:[AuthGuard]},*/
    {path:'perfis', component:PerfisComponent, canActivate:[AuthGuard]},
    {path:'perfis/criarperfil', component:CriarPerfilComponent, canActivate:[AuthGuard] },
    {path:'utilizadores', component:UtilizadoresComponent, canActivate:[AuthGuard]},
    {path:'utilizadores/criarutilizador', component:CriarUtilizadorComponent, canActivate:[AuthGuard]},
    {path:'', component: AppComponent,canActivate:[AuthGuard]},
    {path:'home', component: HomeComponent,canActivate:[AuthGuard]},
    //{path:'configuracoes', loadChildren:'app/configuracoes/configuracoes.module#ConfiguracoesModule',canActivate:[AuthGuard]},
        
    //{path:'encomendas', component: EncomendasComponent},
    //{path:'encomendasDetalhe', component: EncomendaDatalheComponent},
    {path:'login', component: LoginComponent}
];

@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{
    

}
