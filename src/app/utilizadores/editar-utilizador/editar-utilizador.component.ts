import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthGuard } from "app/guards/auth.guard";
import { CriarUtilizadorService } from "app/utilizadores/criar-utilizador/criar-utilizador.service";
import { EditarUtilizadorService } from "app/utilizadores/editar-utilizador/editar-utilizador.service";

@Component({
  selector: 'app-editar-utilizador',
  templateUrl: './editar-utilizador.component.html',
  styleUrls: ['./editar-utilizador.component.css']
})
export class EditarUtilizadorComponent implements OnInit {
  botaoVoltar=false;
  sucesso=false;
  mensagem='';
  botaoAtivo=true;
  disable=false;
  erroPerfis=false;
  nome;
  email;
  idutilizador;
  arrayClientes = [];
  selectedCliente
  arrayPerfis = [];
  teste;
  clienteSelecionado;
  novoArrayPerfis = [];

  constructor(private activatedRoute: ActivatedRoute, private authGuard: AuthGuard, private criarUtilizadorService: CriarUtilizadorService, private editarUtilizadorService: EditarUtilizadorService, private router:Router) { }


  ngOnInit() {




    this.activatedRoute.params.subscribe((params: Params) => {
      this.idutilizador = params['id'];

      if(this.idutilizador=="DDCAB619-5AE8-4CFA-9AF2-8FC6149DE9F4"||this.idutilizador==this.authGuard.getIdUser()){
        this.botaoAtivo=false;
        this.disable=true;
      }

      let navIten = "1";
      //console.log(this.authGuard.getIdNavCliente());

      //Se o utilizador logado for da Iten
      if (this.authGuard.getIdNavCliente() == navIten) {
        this.criarUtilizadorService.getClientes().subscribe(
          response => {
            this.arrayClientes = response;
            //console.log(this.arrayClientes);
            //this.selectedCliente=this.arrayClientes[0].Idcliente;
            this.criarUtilizadorService.getPerfil(this.authGuard.getCliente()).subscribe(
              response => {
                this.arrayPerfis = response;
                for (var index2 = 0; index2 < this.arrayPerfis.length; index2++) {
                  let aux = { "IdPerfil": this.arrayPerfis[index2].IdPerfil, "NomePerfil": this.arrayPerfis[index2].NomePerfil, selected: false };
                  this.novoArrayPerfis.push(aux);
                }
                console.log(this.novoArrayPerfis);
                this.editarUtilizadorService.getInfoEditarUser(this.idutilizador).subscribe(
                  response => {

                    this.nome = response[0].nome;
                    this.email = response[0].email;
                    this.clienteSelecionado = response[0].cliente;

                    for (var index = 0; index < response.length; index++) {
                      for (var index1 = 0; index1 < response[index].perfis.length; index1++) {
                        let perfil = response[index].perfis[index1].perfil;
                        for (var index2 = 0; index2 < this.novoArrayPerfis.length; index2++) {
                          if (perfil == this.novoArrayPerfis[index2].IdPerfil) {
                            this.novoArrayPerfis[index2].selected = true;
                          }
                        }

                      }

                    }
                    console.log(this.novoArrayPerfis);
                  }
                );
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
            //console.log(this.arrayClientes);

             this.criarUtilizadorService.getPerfil(this.authGuard.getCliente()).subscribe(
              response => {
                this.arrayPerfis = response;
                for (var index2 = 0; index2 < this.arrayPerfis.length; index2++) {
                  let aux = { "IdPerfil": this.arrayPerfis[index2].IdPerfil, "NomePerfil": this.arrayPerfis[index2].NomePerfil, selected: false };
                  this.novoArrayPerfis.push(aux);
                }
                //console.log(this.novoArrayPerfis);
                this.editarUtilizadorService.getInfoEditarUser(this.idutilizador).subscribe(
                  response => {

                    this.nome = response[0].nome;
                    this.email = response[0].email;
                    this.clienteSelecionado = response[0].cliente;
                    //console.log(this.novoArrayPerfis);
                    

                    for (var index = 0; index < response.length; index++) {
                      for (var index1 = 0; index1 < response[index].perfis.length; index1++) {
                        let perfil = response[index].perfis[index1].perfil;
                        console.log(perfil);
                        for (var index2 = 0; index2 < this.novoArrayPerfis.length; index2++) {
                          console.log(this.novoArrayPerfis[index2].IdPerfil);
                          if (perfil == this.novoArrayPerfis[index2].IdPerfil) {
                            this.novoArrayPerfis[index2].selected = true;
                            
                            
                          }
                        }

                      }

                    }
                    //console.log(this.novoArrayPerfis);
                  }
                );
              }
            );
          }
        );
      }
      //console.log(this.idutilizador);


    });

    //console.log(this.idutilizador);


  }
  onSelect(value) {
    this.clienteSelecionado = value;
  }

  voltar(){
    this.router.navigate(['/utilizadores']);
  }

  onSubmit() {

    var arrayPerfisTrue = [];
    for (var index2 = 0; index2 < this.novoArrayPerfis.length; index2++) {
      if (this.novoArrayPerfis[index2].selected == true) {
        arrayPerfisTrue.push(this.novoArrayPerfis[index2].IdPerfil);
      }
    }

    let item = { "id": this.idutilizador, "Nome": this.nome, "Email": this.email, "Cliente": this.clienteSelecionado, "perfis": arrayPerfisTrue };
    console.log(arrayPerfisTrue);
    if(arrayPerfisTrue.length!=0){
    this.editarUtilizadorService.updateUtilizador(item).subscribe(

      response => {
        console.log(response);
        if(response.sucesso==true){
          this.sucesso=true;
          this.mensagem=response.message;
          this.botaoAtivo=false;
          this.botaoVoltar=true;
        }


      });
    }else{
      console.log("passa");
      this.erroPerfis=true;
    }

  }

}
