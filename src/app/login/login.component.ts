import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from "app/login/auth.service";
import { user } from "app/user";
import { Router } from "@angular/router";
import { Md5 } from 'ts-md5/dist/md5';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  private erro:boolean=false;
  private message:string;

  email;
  password;
  isRequired=true;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  fazerLogin(){

    
    if(this.email=="" || this.password==""){
      this.erro==true;
      this.message = "Campos vazios!";
    }else{
          let pwd= Md5.hashStr(this.password);
          var utilizador={"email": this.email, "password":pwd};
          this.authService.login(utilizador).subscribe(
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
