import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "app/login/auth.service";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthGuard implements CanActivate{
  nome: String;

  mostrarMenu=new EventEmitter<string>();

  constructor(private authService:AuthService, private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ){

      if(localStorage.getItem('currentUser')){
        this.mostrarMenu.emit("teste");
        this.getUser();
        return true;
      }
      else{
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }

  }

  getUser():String{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    this.nome=user.user.Nome;
    return this.nome;
  }

  getCliente():String{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    let cliente=user.user.Cliente;
    return cliente;
  }

}
