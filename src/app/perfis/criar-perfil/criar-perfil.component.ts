import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild} from '@angular/core';
import { CriarPerfilService } from "app/perfis/criar-perfil/criar-perfil.service";
import { Router } from "@angular/router";
import { AuthGuard } from "app/guards/auth.guard";
import { FormBuilder, FormGroup } from '@angular/forms';






@Component({
  selector: 'app-criar-perfil',
  templateUrl: './criar-perfil.component.html',
  styleUrls: ['./criar-perfil.component.css']
})
export class CriarPerfilComponent implements OnInit {

  public arrayInfo=[];
  public arrayUrl=[];
  public arrayNomDesc=[];
  selectedAll: any;
  selectedOne:any;
  nome: any;
  descricao: any;
  arrayauxiliar=[]; 
  arrayNovo=[]; 

  constructor(private criarPerfilService:CriarPerfilService, private router:Router, private authGuard:AuthGuard, fb: FormBuilder ) {


  }

  ngOnInit() {

     this.criarPerfilService.getPerfis().subscribe(

      response=>{
          for (var index = 0; index < response.length; index++) {
                for (var index1 = 0; index1 < response[index].infos.length; index1++) {
                    let item1={"idurl":response[index].infos[index1].idurl, "nome":response[index].infos[index1].nome, selected:false};
                    //console.log(item1);

                    this.arrayauxiliar.push(item1);
                }
            let item={"descricao":response[index].Descricao, "infos":this.arrayauxiliar};
            this.arrayNovo.push(item);
            this.arrayauxiliar=[];
          }
          console.log(this.arrayNovo);
      }

      
    );

    /*this.criarPerfilService.getPerfis().subscribe(
      
      response=>{
          this.arrayInfo=[];
          //console.log(response.urlChild[0]);

          for (var index = 0; index < response.length; index++) {
                for (var index1 = 0; index1 < response[index].urlChild.length; index1++) {
                    let item1={"idUrlChild":response[index].urlChild[index1].IdUrlChild, "nomeUrlChild":response[index].urlChild[index1].NomeUrlChild, selected:false};
                    //console.log(item1);

                    this.arrayauxiliar.push(item1);
                }
            let item={"idurl":response[index].IdUrl, "nome":response[index].Nome, selected:false, "urlchild":this.arrayauxiliar};
            this.arrayInfo.push(item);
            this.arrayauxiliar=[];
          }

          //console.log(this.arrayInfo);
      }
      
    );*/

    
  }

  checkIfAllSelected(inf) {
    //console.log(inf);
    if(inf.nome=="Criar Perfil"||inf.nome=="Editar Perfil"){
      this.arrayNovo[1].infos[0].selected=true;
      console.log(this.arrayNovo[1].infos);
    }
    if(inf.nome=="Criar Utilizador"||inf.nome=="Editar Utilizador"){
      console.log("sao utilizadores");
      this.arrayNovo[2].infos[0].selected=true;
    }
    console.log(this.arrayNovo[1].infos);
    //inf.selected=true;
    
    //console.log(this.arrayNovo);
    
  }



  onSubmit(){


    
    var arrayUrl=[];
    let cliente=this.authGuard.getCliente();
    //console.log(this.arrayNovo);

    if(!((this.arrayNovo[1].infos[1].selected==true||this.arrayNovo[1].infos[2].selected==true)&&this.arrayNovo[1].infos[0].selected==false)){
        if(!((this.arrayNovo[2].infos[1].selected==true||this.arrayNovo[2].infos[2].selected==true)&&this.arrayNovo[2].infos[0].selected==false)){
              for (var index = 0; index < this.arrayNovo.length; index++) {
                  for (var index1 = 0; index1 < this.arrayNovo[index].infos.length; index1++) {
                    if(this.arrayNovo[index].infos[index1].selected==true){
                      arrayUrl.push(this.arrayNovo[index].infos[index1].idurl);
                    }
                  }
                }

              let novoPerfil = {"nome":this.nome, "descricao":this.descricao, "cliente":cliente, "url": arrayUrl};
              console.log(novoPerfil);
              
              this.criarPerfilService.insertPerfil(novoPerfil).subscribe(

                response=>{
                  this.arrayUrl=[];
                  this.router.navigate(['/perfis']);

                });

            
            }else{
                this.arrayNovo[2].infos[0].selected=true;
                //console.log("erroUtilizadores");
                //mensagem Nota
            }


    }else{
      this.arrayNovo[1].infos[0].selected=true;
      //console.log("erroPerfis");
      //mensagem Nota
    }
  }
    
}