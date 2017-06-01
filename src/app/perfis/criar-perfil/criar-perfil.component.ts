import { Component, OnInit } from '@angular/core';
import { CriarPerfilService } from "app/perfis/criar-perfil/criar-perfil.service";



@Component({
  selector: 'app-criar-perfil',
  templateUrl: './criar-perfil.component.html',
  styleUrls: ['./criar-perfil.component.css']
})
export class CriarPerfilComponent implements OnInit {

  public arrayInfo=[];
  //private saveInfo: boolean = true;
  //public perfilMapa:perfilMapa;

  

  constructor(private criarPerfilService:CriarPerfilService) { }

  ngOnInit() {

    this.criarPerfilService.getPerfis().subscribe(

      response=>{
          /*for (var index = 0; index < response.length; index++) {
            //console.log(response[index].Descricao);
            this.descricoes.push(response[index].Descricao);

            for (var index1 = 0; index1 < response[index].infos.length; index1 ++) {
              //console.log(response[index].infos[index1].idurl);
              this.info.push(response[index].infos[index1].idurl, response[index].infos[index1].nome);
            }
                
          }*/

          this.arrayInfo=response;
          //alert(this.descricoes[0].infos[0].idurl);
          //console.log(this.descricoes);
          //console.log(this.info);
      }

      
    );
    
    
  }

  onSubmit(form){
    console.log(form.value);

  }

}
