import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";

@Injectable()
export class CriarUtilizadorService {

  constructor(private http:Http) { }

  getClientes() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:3000/ws/cliente', options).map(data => {
            //console.log(data.json());
            return data.json();
    });
  
   }

   getPerfil() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:3000/ws/perfil', options).map(data => {
            //console.log(data.json());
            return data.json();
    });
  
   }

}
