import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";


@Injectable()
export class EditarUtilizadorService {

  constructor(private http:Http) { }
  
  
  getInfoEditarUser(iduser) {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let id={"idutilizador":iduser}
    console.log(iduser);
    
    return this.http.post('http://localhost:3000/ws/utilizadores/infoUserEditUser', JSON.stringify(id), options)
            .map((response: Response)=>response.json());

   }

   updateUtilizador(utilizador) {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    console.log(utilizador);
    
    return this.http.post('http://localhost:3000/ws/utilizador/updateUtilizadores', JSON.stringify(utilizador), options)
            .map((response: Response)=>response.json());

   }

}
