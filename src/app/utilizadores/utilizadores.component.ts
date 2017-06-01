import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  criarUtilizadorRoute(){
    this.router.navigate(['/utilizadores/criarutilizador']);

  }

}
