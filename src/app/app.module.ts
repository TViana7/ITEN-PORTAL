import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { routing } from "app/app.routing";
//import { EncomendasComponent } from './encomendas/encomendas.component';
import { AuthService } from "app/login/auth.service";
import { AppRoutingModule } from "app/app.routing.module";
//import { EncomendasModule } from "app/encomendas/encomendas.module";
//import { ConfiguracoesModule } from "app/configuracoes/configuracoes.module";
import { PerfisModule } from "app/perfis/perfis.module";
import { UtilizadoresModule } from "app/utilizadores/utilizadores.module";
import { AuthGuard } from "app/guards/auth.guard";
import { EditarUserComponent } from './editar-user/editar-user.component';
import { EditarUserService } from "app/editar-user/editar-user.service";
import { EditarPasswordComponent } from './editar-password/editar-password.component';
import { EditarPasswordService } from "app/editar-password/editar-password.service";
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RecuperarPasswordEmailComponent } from './recuperar-password-email/recuperar-password-email.component';
import { RecuperarPasswordEmailService } from "app/recuperar-password-email/recuperar-password-email.service";
import { RecuperarPasswordService } from "app/recuperar-password/recuperar-password.service";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EditarUserComponent,
    EditarPasswordComponent,
    RecuperarPasswordComponent,
    RecuperarPasswordEmailComponent,
    //EncomendasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //EncomendasModule,
    AppRoutingModule, 
    //ConfiguracoesModule,
    PerfisModule,
    UtilizadoresModule
    //routing
  ],
  providers: [AuthService, AuthGuard, LoginComponent, EditarUserComponent, EditarUserService, EditarPasswordComponent, EditarPasswordService, RecuperarPasswordEmailService, RecuperarPasswordEmailComponent, RecuperarPasswordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
