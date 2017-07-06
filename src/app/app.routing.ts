import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { AppComponent } from "app/app.component";
import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/login/login.component";
import { EncomendasComponent } from "app/encomendas/encomendas.component";


const appRoutes: Routes=[
    {path:'', component: AppComponent},
    {path:'home', component: HomeComponent},
    {path:'encomendas', component: EncomendasComponent},
    {path:'login', component: LoginComponent}
]

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes); 