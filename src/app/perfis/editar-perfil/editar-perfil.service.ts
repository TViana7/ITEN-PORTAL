import { Injectable } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";
import { Http, RequestOptions, Headers, Response } from "@angular/http";

@Injectable()
export class EditarPerfilService {

  constructor(private http:Http, private authGuard:AuthGuard) { }


  getUrlTrue(idperfil:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let idperfilaux={"idperfil":idperfil};

    //console.log("Webservice"+idperfil);

    return this.http.post('http://localhost:3000/ws/perfis/editarPerfis/getUrl', JSON.stringify(idperfilaux), options)
            .map((response: Response)=>response.json());
    
    
  }

  updatePerfil(perfil:Object){
    console.log(perfil);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post('http://localhost:3000/ws/perfis/inserirPerfil/update', JSON.stringify(perfil), options)
            .map((response: Response)=>response.json());

  }

}
