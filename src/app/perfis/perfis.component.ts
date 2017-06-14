import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PerfilService } from "app/perfis/perfil.service";

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
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
    this.router.navigate(['/perfis/criarperfil']);

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
