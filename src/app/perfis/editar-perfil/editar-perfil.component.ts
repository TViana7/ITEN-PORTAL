import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CriarPerfilService } from "app/perfis/criar-perfil/criar-perfil.service";
import { EditarPerfilService } from "app/perfis/editar-perfil/editar-perfil.service";
import { AuthGuard } from "app/guards/auth.guard";

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  arrayUrlTrue = [];
  arrayNovo = [];
  arrayauxiliar = [];
  public arrayUrl = [];
  perfilIdRecebido: string;
  nomeRecebido: string;
  descricaoRecebida: string;
  nome;
  descricao;
  sucesso;
  mensagem;
  sucesso1;
  sucesso2;
  mensagem1;
  mensagem2;
  adicionar = true;
  voltar = false;
  disable=false;

  constructor(private activatedRoute: ActivatedRoute, private criarPerfilService: CriarPerfilService, private editarPerfilService: EditarPerfilService, private authGuard: AuthGuard, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.perfilIdRecebido = params['id'];
      this.nome = params['nome'];
      this.descricao = params['descricao'];

      if(this.perfilIdRecebido=="B100A104-B075-42AD-8350-6A2ED8EBC6DB"){
      this.disable=true;
    }

    });

    if(this.perfilIdRecebido=="B100A104-B075-42AD-8350-6A2ED8EBC6DB"){
      this.disable=true;
    }

    this.editarPerfilService.getUrlTrue(this.perfilIdRecebido).subscribe(
      response => {
        this.arrayUrlTrue = response;
        console.log(this.arrayUrlTrue.length);
      }

    );

    this.criarPerfilService.getPerfis().subscribe(

      response => {

        for (var index = 0; index < response.length; index++) {
          for (var index1 = 0; index1 < response[index].infos.length; index1++) {
            let item1 = { "idurl": response[index].infos[index1].idurl, "nome": response[index].infos[index1].nome, selected: false };
            //console.log(item1);

            this.arrayauxiliar.push(item1);
          }
          let item = { "descricao": response[index].Descricao, "infos": this.arrayauxiliar };
          this.arrayNovo.push(item);
          this.arrayauxiliar = [];
        }
        console.log(this.arrayNovo);
        //console.log(this.arrayNovo);
        //console.log(this.arrayNovo);

        for (var index = 0; index < this.arrayNovo.length; index++) {
          for (var index1 = 0; index1 < this.arrayNovo[index].infos.length; index1++) {
            for (var index2 = 0; index2 < this.arrayUrlTrue.length; index2++) {
              if (this.arrayNovo[index].infos[index1].idurl == this.arrayUrlTrue[index2].url) {
                this.arrayNovo[index].infos[index1].selected = true;
              }

            }

          }


        }
      }


    );



  }

  checkIfAllSelected(inf) {
    //console.log(inf);
    if (inf.nome == "Criar Perfil" || inf.nome == "Editar Perfil") {
      this.arrayNovo[1].infos[0].selected = true;
      console.log(this.arrayNovo[1].infos);
    }
    if (inf.nome == "Criar Utilizador" || inf.nome == "Editar Utilizador") {
      console.log("sao utilizadores");
      this.arrayNovo[2].infos[0].selected = true;
    }
    console.log(this.arrayNovo[1].infos);
    //inf.selected=true;

    //console.log(this.arrayNovo);

  }



  voltarBotao() {

    this.router.navigate(["perfis"]);

  }


  onSubmit() {



    var arrayUrl = [];
    let cliente = this.authGuard.getCliente();
    //console.log(this.arrayNovo);
    if (this.nome != '' && this.descricao != '') {
      if (!((this.arrayNovo[1].infos[1].selected == true || this.arrayNovo[1].infos[2].selected == true) && this.arrayNovo[1].infos[0].selected == false)) {
        if (!((this.arrayNovo[2].infos[1].selected == true || this.arrayNovo[2].infos[2].selected == true) && this.arrayNovo[2].infos[0].selected == false)) {
          for (var index = 0; index < this.arrayNovo.length; index++) {
            for (var index1 = 0; index1 < this.arrayNovo[index].infos.length; index1++) {
              if (this.arrayNovo[index].infos[index1].selected == true) {
                arrayUrl.push(this.arrayNovo[index].infos[index1].idurl);
              }
            }
          }

          let novoPerfil = { "idperfil": this.perfilIdRecebido, "nome": this.nome, "descricao": this.descricao, "cliente": cliente, "url": arrayUrl };
          console.log(novoPerfil);
          if (novoPerfil.url.length > 0) {
            this.editarPerfilService.updatePerfil(novoPerfil).subscribe(

              response => {
                if (response.sucesso == true) {
                  this.voltar = true;
                  this.adicionar = false;
                  this.sucesso = true;
                  this.mensagem = response.message;
                  this.arrayUrl = [];
                } else {
                  this.sucesso = false;
                  this.mensagem = response.message;
                  this.arrayUrl = [];
                }

              });
          } else {
            this.sucesso1 = true;
            this.sucesso2 = false;
            this.mensagem2 = "*Tem que ser atribuidos pele menos um URL ao perfil!";
          }


        } else {
          this.arrayNovo[2].infos[0].selected = true;
          console.log("erroUtilizadores");
          //mensagem Nota
        }


      } else {
        this.arrayNovo[1].infos[0].selected = true;
        console.log("erroPerfis");
        //mensagem Nota
      }
    } else {
      this.sucesso1 = false;
      this.mensagem1 = "*Campo(s) vazios!";
    }
  }

}
