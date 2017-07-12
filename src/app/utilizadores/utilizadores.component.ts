import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UtilizadoresService } from "app/utilizadores/utilizadores.service";

@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent implements OnInit {
  editar=true;
  public arrayUtilizadores=[];

  constructor(private router:Router, private utilizadoresService:UtilizadoresService) { }

  ngOnInit() {
    this.utilizadoresService.getUtilizadoresTabela().subscribe(
      response=>{
        console.log(response);
          this.arrayUtilizadores=response;
          console.log(this.arrayUtilizadores);
      } 
    );  

  }

  criarUtilizadorRoute(){
    this.router.navigate(['/utilizadores/criarutilizador']);

  }

  edit(id, nome, email){
    console.log(id, nome, email);
    this.router.navigate(['utilizadores/editarutilizador/'+id]);
  }

}
