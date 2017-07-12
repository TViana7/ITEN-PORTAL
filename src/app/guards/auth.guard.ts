import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "app/login/auth.service";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthGuard implements CanActivate{
  
  nomeUser: String;
  categoria = [];



  mostrarMenu=new EventEmitter<string>();
  username=new EventEmitter<string>();
  categorias=new EventEmitter<any>();
  
  

  constructor(private authService:AuthService, private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ){

      if(localStorage.getItem('currentUser')){
        this.getCategoria();
        this.mostrarMenu.emit('currentUser');
        this.nomeUser=this.getUser();
        this.username.emit(''+this.nomeUser);
        this.categorias.emit(this.categoria);
        this.categoria=[];
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }

  }
  

  getUser():String{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    var nome=user.user.Nome;
    return nome;
  }
  getEmail():String{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    var nome=user.user.Email;
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
  getCategoria(){
    var user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user.url);
    for (var index = 0; index < user.url.length; index++) {
      let item={"cat":user.url[index].categoria, "link":user.url[index].url[0].url};
      this.categoria.push(item);
    }
    console.log(this.categoria);
  }


  //função que retornam true or false

  getPermissoes(url:string):boolean{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    
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
