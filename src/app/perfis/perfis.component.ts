import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PerfilService } from "app/perfis/perfil.service";
import $ from 'jquery';
import { AuthGuard } from "app/guards/auth.guard";
import swal from 'sweetalert2'





@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css'],
})
export class PerfisComponent implements OnInit {
 public arrayListagem=[];
 editar=false;
 criar=false;
 sucesso;
 mensagem;





  constructor(private router:Router, private perfilService:PerfilService, private authGuard:AuthGuard) {
       

   }


  ngOnInit() {
    var edt="perfis/editarperfil/:id/:nome/:descricao";
    var cr="perfis/criarperfil";
    this.editar=this.authGuard.getPermissoes(edt);
    console.log(this.editar);
    this.criar=this.authGuard.getPermissoes(cr);
    console.log(this.editar);

     this.perfilService.getPerfilTabela().subscribe(
      response=>{
          this.arrayListagem=response;
          console.log(this.arrayListagem);

      } 
    );

  }


  criarPerfilRoute(){
  

    this.router.navigate(['perfis/criarperfil']);
     //ele.scrollIntoView({block:"start",behavior:"smooth"});
   
   



  }

  delete(idPerfil:string){
    this.perfilService.deletePerfil(idPerfil).subscribe(response=>{
      console.log(response);
      if(response.sucesso==true){
        this.sucesso=response.sucesso;
        this.mensagem=response.message;
        location.reload();
      }else{
        this.sucesso=response.sucesso;
        this.mensagem=response.message;
      }
       
    });
    
  }

  edit(idPerfil:string, nome:string, descricao:string){
    console.log(idPerfil);
    this.router.navigate(['perfis/editarperfil/'+idPerfil+'/'+nome+'/'+descricao]);
  }


  
}
