import { Component, OnInit } from '@angular/core';
import { CriarPerfilService } from "app/perfis/criar-perfil/criar-perfil.service";
import { Router } from "@angular/router";
import { AuthGuard } from "app/guards/auth.guard";





@Component({
  selector: 'app-criar-perfil',
  templateUrl: './criar-perfil.component.html',
  styleUrls: ['./criar-perfil.component.css']
})
export class CriarPerfilComponent implements OnInit {

  public arrayInfo=[];
  public arrayUrl=[];
  public arrayNomDesc=[];
 

  

  constructor(private criarPerfilService:CriarPerfilService, private router:Router, private authGuard:AuthGuard ) { }

  ngOnInit() {

    this.criarPerfilService.getPerfis().subscribe(

      response=>{
          this.arrayInfo=response;
          console.log(this.arrayInfo);
      }
    );

    
  }

  onSubmit(form){
    let perfilcliente:boolean=false;
    console.log("formnovo:"+form.value.PerfilCliente);
  
    for (let key of Object.keys(form.value)) {  
        let idurl = form.value[key];
        if(idurl==true){
          //console.log(key);
          this.arrayUrl.push(key);
        }
    }

    let cliente=this.authGuard.getCliente();
    let novoPerfil = { "nome": form.value.nome,
                       "descricao": form.value.descricao,
                       "cliente": cliente,
                       "url": this.arrayUrl
                      }
    
    this.criarPerfilService.insertPerfil(novoPerfil).subscribe(

      response=>{
        this.arrayUrl=[];
        novoPerfil = { "nome": "",
                       "descricao": "",
                       "cliente":"",
                       "url": this.arrayUrl
                      }
        console.log(response);
        this.router.navigate(['/perfis']);

      });
    //console.log(this.arrayUrl);
  
  }

}