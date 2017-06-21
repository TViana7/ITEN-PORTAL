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
  public selectedCliente:string;
  public arrayUrl=[];
  
  


  constructor(private criarUtilizadorService:CriarUtilizadorService, private authGuard:AuthGuard) { }

  ngOnInit() {
    let navIten="1";
    console.log(this.authGuard.getIdNavCliente());

    //Se o utilizador logado for da Iten
    if(this.authGuard.getIdNavCliente()==navIten){
      this.criarUtilizadorService.getClientes().subscribe(
      response=>{
           this.arrayClientes=response;
           console.log(this.arrayClientes);
           this.selectedCliente=this.arrayClientes[0].Idcliente;
           this.criarUtilizadorService.getPerfil(this.authGuard.getCliente()).subscribe(
              response=>{
              this.arrayPerfis=response;
              }
          );
          }
      );

    // se o utilizador logado for outro cliente
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
  
  onSelect(clienteId) {
    this.selectedCliente=clienteId;
  }
  
  

  onSubmit(form){
    for (let key of Object.keys(form.value)) {  
        let idurl = form.value[key];
        if(idurl==true){
          //console.log(key);
          this.arrayUrl.push(key);
        }
    }
    //console.log(this.arrayUrl);
    //console.log(form.value);
    //console.log(this.selectedCliente);

    let novoUtilizador = { "Email": form.value.email,
                       "Nome": form.value.nome,
                       "Cliente": this.selectedCliente,
                       "url": this.arrayUrl
                      }

    console.log(novoUtilizador);

    this.criarUtilizadorService.insertUtilizador(novoUtilizador).subscribe(
    response=>{
          console.log(response);

    }


  );

  }
  

}
