import { Component, OnInit } from '@angular/core';
import { RecuperarPasswordEmailService } from "app/recuperar-password-email/recuperar-password-email.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-recuperar-password-email',
  templateUrl: './recuperar-password-email.component.html',
  styleUrls: ['./recuperar-password-email.component.css']
})
export class RecuperarPasswordEmailComponent implements OnInit {
  email = '';
  erro=false;
  mensagem;
  botaoLogin=false;
  sucesso=false;
  input=true;
  botaoEnviar=true;
  constructor(private recuperarPasswordEmailService: RecuperarPasswordEmailService, private router: Router) { }

  ngOnInit() {
 
  }

  login(){
    this.router.navigate(["login"]);
  }

  onSubmit() {
    if (this.email != '') {
      if ((this.email.includes("@"))) {
        this.recuperarPasswordEmailService.email(this.email).subscribe(
          response => {

            
          

          });
          this.erro=false;
            this.botaoLogin=true;
            this.sucesso=true;
            this.input=false;
            this.botaoEnviar=false;
      } else {
        this.erro = true;
        this.mensagem = "*Email inválido!";
      }
    } else {
         console.log("teste");
      this.erro = true;
      this.mensagem = "*Campo vazio!";
    }
  }


}
