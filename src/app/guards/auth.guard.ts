import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "app/login/auth.service";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthGuard implements CanActivate{
  
  nomeUser: String;

  mostrarMenu=new EventEmitter<string>();
  username=new EventEmitter<string>();
  

  constructor(private authService:AuthService, private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ){

      if(localStorage.getItem('currentUser')){
        
        this.mostrarMenu.emit('currentUser');
        this.nomeUser=this.getUser();
        this.username.emit(''+this.nomeUser);
        return true;
      }
      else{
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }

  }
  

  getUser():String{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    var nome=user.user.Nome;
    return nome;
  }

  getIdUser():String{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    let iduser=user.user.Idutilizador;
    return iduser;
  }

  getCliente():String{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    let cliente=user.user.Cliente;
    return cliente;
  }

   getIdNavCliente():String{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    let IdNavCliente=user.user.IdNav;
    return IdNavCliente;
  }
  getTokenUser():string{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    let tokenUser=user.token;
    return tokenUser;
  }

}
