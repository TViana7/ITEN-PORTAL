import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from "app/login/auth.service";
import { user } from "app/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private utilizador: user=new user();
  
  private erro:boolean=false;
  private message:string;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  fazerLogin(){
    
    if(this.utilizador.Email=="" || this.utilizador.Password==""){
      this.erro==true;
      this.message = "Campos vazios!";
    }else{
          this.authService.login(this.utilizador).subscribe(
            response =>{
            console.log(response);
              if(response.sucesso==true){
                localStorage.setItem('currentUser', JSON.stringify(response));
                console.log(localStorage.length);
                console.log("Passa aqui!");
                this.router.navigate(["/home"]);

              }else{
                console.log(response);
                this.erro==true;
                this.message = response.message;
                
                this.router.navigate(["/login"]);
              }
            }
          );
    }

  }

}
