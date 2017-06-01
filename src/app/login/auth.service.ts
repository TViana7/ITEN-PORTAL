import { Injectable, EventEmitter } from '@angular/core';
import { user } from "app/user";
import { Router, Data } from "@angular/router";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { map } from "rxjs/operator/map";
import { loginModelo } from 'app/loginModelo';




@Injectable()
export class AuthService {
 
  private header = new Headers();


  mostrarMenu=new EventEmitter<boolean>();
  

  constructor(private http:Http) {
        //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //this.token = currentUser && currentUser.token;
   }

    



   login(utilizador:user) {

    let email=utilizador.Email;
    let password=utilizador.Password;
    let authobj = {"email":utilizador.Email, "password":utilizador.Password};


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post('http://localhost:3000/auth/autenticacao', JSON.stringify(authobj), options)
            .map((response: Response)=>response.json());
    
  
   }
   

   
   
  fazerLogin(utilizador: user){ 

    /*console.log(utilizador.Email);
    if(utilizador.Email=="admin"&&utilizador.Password=="admin"){
      this.autenticado=true;
      this.mostrarMenu.emit(true);
      this.router.navigate(["/home"]);
    }else{
      this.autenticado=false;
      this.mostrarMenu.emit(false); 
    }*/
  }


}
