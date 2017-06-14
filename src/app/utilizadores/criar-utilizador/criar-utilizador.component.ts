import { Component, OnInit } from '@angular/core';
import { CriarUtilizadorService } from "app/utilizadores/criar-utilizador/criar-utilizador.service";

@Component({
  selector: 'app-criar-utilizador',
  templateUrl: './criar-utilizador.component.html',
  styleUrls: ['./criar-utilizador.component.css']
})
export class CriarUtilizadorComponent implements OnInit {


  public arrayClientes=[];
  public arrayPerfis=[];
  constructor(private criarUtilizadorService:CriarUtilizadorService) { }

  ngOnInit() {
    this.criarUtilizadorService.getClientes().subscribe(
      response=>{
          this.arrayClientes=response;
          console.log(this.arrayClientes);
      }
    );

    this.criarUtilizadorService.getPerfil().subscribe(
      response=>{
        this.arrayPerfis=response;

      }
    );
  }

  onSubmit(form){
    console.log(form.value);
  }

}
