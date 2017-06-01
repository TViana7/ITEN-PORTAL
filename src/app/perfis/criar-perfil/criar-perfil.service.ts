import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class CriarPerfilService {

  constructor(private http:Http) { }


  getPerfis() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:3000/ws/mapeamento/getURL/teste', options).map(data => {
            //console.log(data.json());
            return data.json();
    });
  
   }

}
