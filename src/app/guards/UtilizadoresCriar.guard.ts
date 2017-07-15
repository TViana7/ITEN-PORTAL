import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "app/login/auth.service";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class UtilizadoresCriarGuard implements CanActivate{
  

  constructor(private authService:AuthService, private router:Router) { }

  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ){
      let utilizadores="utilizadores/criarutilizador";
      if(this.getPermissoes(utilizadores)==true){
          return true;
      }else{
          this.router.navigate(['/home']);
          return false;

      }
      

  }
  

  //função que retornam true or false

  getPermissoes(url:string):boolean{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    console.dir(user.url);
    for (var index = 0; index < user.url.length; index++) {

      for (var index1 = 0; index1 < user.url[index].url.length; index1++) {
        
        if(url==user.url[index].url[index1].url){
          return true;
        }
      }
    }
    return false;

  }




}
