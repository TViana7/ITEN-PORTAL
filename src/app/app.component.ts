import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "app/login/auth.service";
import { LoginComponent } from "app/login/login.component";
import { AuthGuard } from "app/guards/auth.guard";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  nome:String
  user:String
  mostrarMenu:boolean=false;
  categorias = [];

  constructor(private authGuard: AuthGuard, private router: Router){

  }

  ngOnInit(){
    this.authGuard.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    this.authGuard.username.subscribe(
      nome=> this.nome= nome 
    );
    console.log(this.nome);

    this.authGuard.categorias.subscribe(
      categorias => this.categorias = categorias
    );
    console.log("teste");
    console.log(this.categorias);  
  }


  logout(){
    //this.login.utilizadorLogout(false);
    this.categorias=[];
    this.mostrarMenu=false;
    localStorage.clear();
    this.router.navigate(['login'])
  }
  editarPerfil(){
    this.router.navigate(['user/editaruser']);
  }

  alterarPassword(){
    this.router.navigate(['user/alterarpassword']);
  }

  cleanLocalStorage(){
    localStorage.clear();
    location.reload()
  }

 
}
