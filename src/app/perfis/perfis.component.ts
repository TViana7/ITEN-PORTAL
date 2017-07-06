import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PerfilService } from "app/perfis/perfil.service";
import $ from 'jquery';





@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css'],
})
export class PerfisComponent implements OnInit {
 public arrayListagem=[];





  constructor(private router:Router, private perfilService:PerfilService) {
       

   }


  ngOnInit() {

     this.perfilService.getPerfilTabela().subscribe(
      response=>{
          this.arrayListagem=response;
          console.log(this.arrayListagem);
      } 
    );  
  }


  criarPerfilRoute(){
    var el = document.getElementById('bteste');
    console.log("b",el);
    //el.addEventListener("click",function() {console.log("cliquei")});
    //var ele = document.querySelector('#boo');
    //console.log("b",ele);

    this.router.navigate(['/perfis/criarperfil']);
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


  
}
