import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
})
export class PerfisComponent implements OnInit {



  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  criarPerfilRoute(){
    this.router.navigate(['/perfis/criarperfil']);

  }

}
