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
   getClientesOutrosUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let iduser={"idUser":id};
    
    
    return this.http.post('http://localhost:3000/ws/cliente/outrosUtilizadores', JSON.stringify(iduser), options)
            .map((response: Response)=>response.json());


   }

   getPerfil(idCliente) {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let id={"idCliente":idCliente}
    
    return this.http.post('http://localhost:3000/ws/perfis/perfisCliente', JSON.stringify(id), options)
            .map((response: Response)=>response.json());


   }


}
