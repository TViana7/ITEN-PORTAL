import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";

@Injectable()
export class EditarUserService {

  constructor(private http:Http) { }

  updateUser(iduser:string, nome:string, email:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let user={"idperfil":iduser, "nome":nome, "Email":email};

    //console.log("Webservice"+idperfil);
    console.log(user);

    return this.http.post('http://localhost:3000/ws/utilizador/updateuser', JSON.stringify(user), options)
            .map((response: Response)=>response.json());
    
    
  }

}
