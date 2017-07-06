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

  constructor(private authGuard: AuthGuard, private router: Router){

  }

  ngOnInit(){
    this.authGuard.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    this.authGuard.username.subscribe(
      nome=> this.nome= nome 
    );  
  }


  logout(){
    //this.login.utilizadorLogout(false);
    this.mostrarMenu=false;
    localStorage.clear();
    this.router.navigate(['login'])
  }

 
}
