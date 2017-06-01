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
  mostrarMenu:boolean=false;

  constructor(private authGuard: AuthGuard, private router: Router){

  }

  ngOnInit(){
    this.authGuard.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
      
    );

    console.log(this.mostrarMenu);

    //var user=localStorage.getItem('currentUser');
    
  }

  ngOnChanges(changes) {
    var user = JSON.parse(localStorage.getItem("currentUser"));
      this.nome=user.user.Nome;
  }

  logout(){
    //this.login.utilizadorLogout(false);
    this.mostrarMenu=false;
    this.router.navigate(['login'])
  }
 
}
