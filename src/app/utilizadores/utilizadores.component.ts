import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UtilizadoresService } from "app/utilizadores/utilizadores.service";
import { DataTableModule } from "angular2-datatable";
import { ViewContainerRef } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";




@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent implements OnInit {
  editar = true;
  public arrayUtilizadores = [];
  editaruser = false;
  criaruser = false;
  sucesso;
  mensagem;

  constructor(private router: Router, private utilizadoresService: UtilizadoresService, private authGuard: AuthGuard) { }

  ngOnInit() {



    var edi = "utilizadores/editarutilizador/:id";
    var cr = "utilizadores/criarutilizador";

    this.editaruser = this.authGuard.getPermissoes(edi);
    this.criaruser = this.authGuard.getPermissoes(cr);


    console.log(this.editaruser);
    console.log(this.criaruser);
    this.utilizadoresService.getUtilizadoresTabela().subscribe(
      response => {
        console.log(response);
        this.arrayUtilizadores = response;
        console.log(this.arrayUtilizadores);
      }
    );

  }

  criarUtilizadorRoute() {
    this.router.navigate(['/utilizadores/criarutilizador']);


  }

  edit(id, nome, email) {
    console.log(id, nome, email);
    this.router.navigate(['utilizadores/editarutilizador/' + id]);

  }
  edit1(id) {
    console.log(id);

  }

  delete(id) {
    console.log(id);

    if (id != "DDCAB619-5AE8-4CFA-9AF2-8FC6149DE9F4" && id != this.authGuard.getIdUser()) {
      this.utilizadoresService.deleteUtilizadores(id).subscribe(
        response => {
          console.log(response);
          this.sucesso = true;
          this.mensagem=response.message;
          location.reload();
        }
      );
    } else {
      this.sucesso = false;
      this.mensagem = "Não é possível remover este utilizador!";
    }


  }
}
