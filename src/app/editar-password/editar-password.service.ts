import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";


@Injectable()
export class EditarPasswordService {

  constructor(private http:Http) { }

   updatePassword(iduser:string, passwordatual, passwordnova){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let password={"IdUser":iduser, "PasswordAntiga":passwordatual, "PasswordNova":passwordnova};

    //console.log("Webservice"+idperfil);
    console.log(password);

    return this.http.post('http://localhost:3000/ws/utilizador/updatepassword', JSON.stringify(password), options)
            .map((response: Response)=>response.json());
    
    
  }

}
