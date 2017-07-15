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
  swal('Any fool can use a computer')
    var el = document.getElementById('bteste');
    console.log("b",el);
    //el.addEventListener("click",function() {console.log("cliquei")});
    //var ele = document.querySelector('#boo');
    //console.log("b",ele);

    this.router.navigate(['perfis/criarperfil']);
     //ele.scrollIntoView({block:"start",behavior:"smooth"});
   
   



  }

  delete(idPerfil:string){
    this.perfilService.deletePerfil(idPerfil).subscribe(response=>{
      console.log(response);
      this.perfilService.getPerfilTabela().subscribe(
      response=>{
          this.arrayListagem=response;
          console.log(this.arrayListagem);
      } 
    );  
    });
    
  }

  edit(idPerfil:string, nome:string, descricao:string){
    console.log(idPerfil);
    this.router.navigate(['perfis/editarperfil/'+idPerfil+'/'+nome+'/'+descricao]);
  }


  
}
