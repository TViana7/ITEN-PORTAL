import { Component, OnInit } from '@angular/core';
import { CriarUtilizadorService } from "app/utilizadores/criar-utilizador/criar-utilizador.service";
import { AuthGuard } from "app/guards/auth.guard";
import { Router } from "@angular/router";

@Component({
  selector: 'app-criar-utilizador',
  templateUrl: './criar-utilizador.component.html',
  styleUrls: ['./criar-utilizador.component.css']
})
export class CriarUtilizadorComponent implements OnInit {
  mensagem;
  public arrayClientes = [];
  public arrayPerfis = [];
  public selectedCliente: string;
  public arrayUrl = [];
  ToggleButton: boolean = false;
  existemPerfis=true;
  camposvazios = false;
  perfisVazios = false;
  emailInvalido = false;
  sucesso;
  botaoAdiconar=true;
  botaoVoltar=false;





  constructor(private criarUtilizadorService: CriarUtilizadorService, private authGuard: AuthGuard, private router:Router) { }

  ngOnInit() {
    let navIten = "1";
    console.log(this.authGuard.getIdNavCliente());

    //Se o utilizador logado for da Iten
    if (this.authGuard.getIdNavCliente() == navIten) {
      this.criarUtilizadorService.getClientes().subscribe(
        response => {
          this.arrayClientes = response;
          console.log(this.arrayClientes);
          this.selectedCliente = this.arrayClientes[0].Idcliente;
          this.criarUtilizadorService.getPerfil(this.authGuard.getCliente()).subscribe(
            response => {
              this.arrayPerfis = response;
              //console.log(this.arrayPerfis.length);
              if (response.length == 0) {
                this.existemPerfis=false;

              }
              console.log(this.existemPerfis);
            }
          );
        }
      );

      // se o utilizador logado for outro cliente
    } else {
      let id = this.authGuard.getIdUser();
      //console.log(id);
      this.criarUtilizadorService.getClientesOutrosUser(id).subscribe(
        response => {
          this.arrayClientes = response;
          console.log(this.arrayClientes);
          this.selectedCliente = this.arrayClientes[0].Idcliente;
          console.log(this.selectedCliente);
          this.criarUtilizadorService.getPerfil(this.authGuard.getCliente()).subscribe(
            response => {
              this.arrayPerfis = response;
              if (response.length == 0) {
                this.existemPerfis = false;
              }
              //console.log(this.existemPerfis);

            }
          );
        }
      );
    }
  }

  onSelect(clienteId) {
    this.selectedCliente = clienteId;
  }

  voltar(){
    this.router.navigate(['/utilizadores']);
  }



  onSubmit(form) {
    for (let key of Object.keys(form.value)) {
      let idurl = form.value[key];
      if (idurl == true) {
        //console.log(key);
        this.arrayUrl.push(key);
      }
    }
    //console.log(this.arrayUrl);
    //console.log(form.value);
    //console.log(this.selectedCliente);

    let novoUtilizador = {
      "Email": form.value.email,
      "Nome": form.value.nome,
      "Cliente": this.selectedCliente,
      "CliCriou": this.authGuard.getCliente(),
      "url": this.arrayUrl
    }

    console.log(novoUtilizador);

    if (form.value.email != '' && form.value.nome != '') {
      if (form.value.email.includes("@")) {
        if (this.arrayUrl.length > 0) {
          this.perfisVazios = false;
          this.camposvazios = false;
          this.emailInvalido = false;
          this.criarUtilizadorService.insertUtilizador(novoUtilizador).subscribe(
            response => {
              if(response.sucesso==true){
                this.sucesso=true;
                this.mensagem=response.message;
                this.botaoAdiconar=false;
                this.botaoVoltar=true;
              }else{
                this.sucesso=false;
                this.mensagem=response.message;
              }
            }
          );
        } else {
          this.perfisVazios = true;
          this.emailInvalido = false;
        }
      } else {
        console.log("entra");
        this.perfisVazios = false;
        this.camposvazios = false;
        this.emailInvalido = true;
      }
    } else {
      this.camposvazios = true;
      this.perfisVazios = true;
    }
  }
  selected() {
    return false;
  }


}
