import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { AuthGuard } from "app/guards/auth.guard";

@Injectable()
export class CriarPerfilService {

  constructor(private http:Http, private authGuard:AuthGuard) { }




   /*

    Metodo que retorna um json com os dados para a checkbox

  */
  getPerfis() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', ''+this.authGuard.getTokenUser() );
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:3000/ws/mapeamento/getURL/teste', options).map(data => {
            //console.log(data.json());
            return data.json();
    });
  
   }

   insertPerfil(perfil:Object){
    console.log(perfil);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post('http://localhost:3000/ws/perfis/inserirPerfil/novoPerfil', JSON.stringify(perfil), options)
            .map((response: Response)=>response.json());

  }

}


