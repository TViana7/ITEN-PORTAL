import { Injectable } from '@angular/core';
import {  Http, Headers, Response, RequestOptions  } from "@angular/http";

@Injectable()
export class RecuperarPasswordEmailService {

  constructor(private http:Http) { }

  email(email:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let email1={"Email":email};
    console.log(email);

    //console.log("Webservice"+idperfil);
    return this.http.post('http://localhost:3000/ws/password/recuperarPassword', JSON.stringify(email1), options)
            .map((response: Response)=>response.json());
    
    
  }

}
