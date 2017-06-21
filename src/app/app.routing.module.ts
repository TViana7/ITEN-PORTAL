
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { AppComponent } from "app/app.component";
import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/login/login.component";
import { AuthGuard } from "app/guards/auth.guard";
//import { EncomendasComponent } from "app/encomendas/encomendas.component";
//import { EncomendaDatalheComponent } from "app/encomendas/encomenda-datalhe/encomenda-datalhe.component";


const appRoutes: Routes=[
    {path:'encomendas', loadChildren:'app/encomendas/encomendas.module#EncomendasModule',
        canActivate:[AuthGuard]},
    {path:'perfis', loadChildren:'app/perfis/perfis.module#PerfisModule',
        canActivate:[AuthGuard]},
    {path:'utilizadores', loadChildren:'app/utilizadores/utilizadores.module#UtilizadoresModule',
        canActivate:[AuthGuard]},
    {path:'', component: AppComponent,
        canActivate:[AuthGuard]},
    {path:'home', component: HomeComponent,
        canActivate:[AuthGuard]},
    {path:'configuracoes', 
        loadChildren:'app/configuracoes/configuracoes.module#ConfiguracoesModule',
        canActivate:[AuthGuard]},
        
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