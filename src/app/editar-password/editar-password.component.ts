import { Component, OnInit } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";
import { Router } from "@angular/router";
import { AppComponent } from "app/app.component";
import { EditarPasswordService } from "app/editar-password/editar-password.service";
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: 'app-editar-password',
  templateUrl: './editar-password.component.html',
  styleUrls: ['./editar-password.component.css']
})
export class EditarPasswordComponent implements OnInit {
  mostraBotao=true;
  sucesso;
  mensagem='';
  mensagemError = '';
  passwordAtual = '';
  novaPassword = '';
  confirmarPassword = '';
  iduser;

  constructor(private authGuard: AuthGuard, private router: Router, private appComponent: AppComponent, private editarPasswordService: EditarPasswordService) { }

  ngOnInit() {
    this.iduser = this.authGuard.getIdUser();
  }

  onSubmit() {
    if (this.passwordAtual != '' && this.novaPassword != '' && this.confirmarPassword != '') {
      if (this.novaPassword.length >= 5) {
        if (this.novaPassword == this.confirmarPassword) {
          let pwd = Md5.hashStr(this.passwordAtual);
          let pwd1 = Md5.hashStr(this.novaPassword);
          this.editarPasswordService.updatePassword(this.iduser, pwd, pwd1).subscribe(
            response => {
              if(response.sucesso==true){
                this.sucesso=response.sucesso;
                this.mensagem=response.message;
                this.appComponent.cleanLocalStorage();
                this.mostraBotao = false;
              }else{
                this.sucesso=response.sucesso;
                this.mensagem=response.message;
              }
            });

        } else {
          this.mensagemError="*As novas passwords são diferentes!"
        }
      }
      else { 
        this.mensagemError="*A nova password deve conter pelos menos 5 caracteres!"
      }

    } else {
      this.mensagemError="*Campo(s) vazios!"
    }
  }
}
