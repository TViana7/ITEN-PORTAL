import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { AuthGuard } from "app/guards/auth.guard";

@Injectable()
export class PerfilService {

        constructor(private http: Http, private authGuard:AuthGuard) { }


        getPerfilTabela() {
                var c = this.authGuard.getCliente();
                let cliente={"cliente":c};
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');
                let options = new RequestOptions({ headers: headers });

                return this.http.post('http://localhost:3000/ws/perfis/todosperfis/getperfis',JSON.stringify(cliente), options).map(data => {
                        //console.log(data.json());
                        return data.json();
                });

        }

        deletePerfil(idperfil: string) {
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');
                let options = new RequestOptions({ headers: headers });
                let idperfilaux = { "idperfil": idperfil };

                return this.http.post('http://localhost:3000/ws/perfis/deletePerfis', JSON.stringify(idperfilaux), options)
                        .map((response: Response) => response.json());


        }

}
