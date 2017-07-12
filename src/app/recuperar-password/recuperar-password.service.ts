import { Injectable } from '@angular/core';
import {  Http, Headers, Response, RequestOptions  } from "@angular/http";

@Injectable()
export class RecuperarPasswordService {

  constructor(private http:Http) { }

  password(idutilizador:string, password:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let passwordUser={"iduser":idutilizador, "password":password};
    console.log(passwordUser);

    //console.log("Webservice"+idperfil);
    return this.http.post('http://localhost:3000/ws/utilizador/recoverpassword', JSON.stringify(passwordUser), options).map((response: Response)=>response.json());
    
    
  }

}
