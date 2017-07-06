import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";

@Injectable()
export class UtilizadoresService {

  constructor(private http:Http) { }

  getUtilizadoresTabela() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:3000/ws/utilizadores/todosutilizadores/getutilizadores', options).map(data => {
            //console.log(data.json());
            return data.json();
    });
  
   }

}
