import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UtilizadoresService } from "app/utilizadores/utilizadores.service";
import { DataTableModule } from "angular2-datatable";
import { ViewContainerRef } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";
import { MdSnackBar } from '@angular/material';



@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent implements OnInit {
  editar = true;
  public arrayUtilizadores = [];
  editaruser=false;
  criaruser=false;

  constructor(private router: Router, private utilizadoresService: UtilizadoresService, private authGuard: AuthGuard, private snackBar:MdSnackBar) { }

  ngOnInit() {

    this.snackBar.open("Autenticação invalida", "Fechar", {
        duration: 5000,
      });
    
    
    var edi="utilizadores/editarutilizador/:id";
    var cr="utilizadores/criarutilizador";

    this.editaruser=this.authGuard.getPermissoes(edi);
    this.criaruser=this.authGuard.getPermissoes(cr);


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
    //console.log("auth"+this.authGuard.getIdUser)
    
    if (id != "DDCAB619-5AE8-4CFA-9AF2-8FC6149DE9F4") {
      if (id != this.authGuard.getIdUser()) {
        this.utilizadoresService.deleteUtilizadores(id).subscribe(
          response => {
            console.log(response);
            this.utilizadoresService.getUtilizadoresTabela().subscribe(
              response => {
                console.log(response);
                this.arrayUtilizadores = response;
                console.log(this.arrayUtilizadores);
                return window.confirm('Do you really want to cancel?');
              }
            );
          }
        );

      }
    }

  }
}
