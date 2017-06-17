import { Component, OnInit } from '@angular/core';
import { CriarUtilizadorService } from "app/utilizadores/criar-utilizador/criar-utilizador.service";
import { AuthGuard } from "app/guards/auth.guard";

@Component({
  selector: 'app-criar-utilizador',
  templateUrl: './criar-utilizador.component.html',
  styleUrls: ['./criar-utilizador.component.css']
})
export class CriarUtilizadorComponent implements OnInit {


  public arrayClientes=[];
  public arrayPerfis=[];
  constructor(private criarUtilizadorService:CriarUtilizadorService, private authGuard:AuthGuard) { }

  ngOnInit() {
    let navIten="1";
    console.log(this.authGuard.getIdNavCliente());
    if(this.authGuard.getIdNavCliente()==navIten){
      this.criarUtilizadorService.getClientes().subscribe(
      response=>{
          this.arrayClientes=response;
          console.log(this.arrayClientes);
          this.criarUtilizadorService.getPerfil(this.authGuard.getCliente()).subscribe(
              response=>{
              this.arrayPerfis=response;

              }
          );
          }
      );
    }else{
      let id=this.authGuard.getIdUser();
      console.log(id);
      this.criarUtilizadorService.getClientesOutrosUser(id).subscribe(
      response=>{
          this.arrayClientes=response;
          console.log(this.arrayClientes);

          this.criarUtilizadorService.getPerfil(this.authGuard.getCliente()).subscribe(
              response=>{
              this.arrayPerfis=response;

          }
          );
          }
      );
    }
  }

  onSubmit(form){
    console.log(form.value);
  }

}
