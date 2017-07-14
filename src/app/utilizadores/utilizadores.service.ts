import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { AuthGuard } from "app/guards/auth.guard";

@Injectable()
export class UtilizadoresService {

  constructor(private http:Http, private authGuard: AuthGuard) { }

  getUtilizadoresTabela() {

    var c= this.authGuard.getCliente();
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let cliente={"cliente":c};
    
    return this.http.post('http://localhost:3000/ws/utilizadores/todosutilizadores/getutilizadores',JSON.stringify(cliente), options).map(data => {
            //console.log(data.json());
            return data.json();
    });
  
   }

   deleteUtilizadores(id) {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let user={"utilizador":id};
    
    return this.http.post('http://localhost:3000/ws/utilizador/apagaruser',JSON.stringify(user), options).map(data => {
            //console.log(data.json());
            return data.json();
    });
  
   }
  

}
