import { Component, OnInit } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";
import { MessagesModule } from 'primeng/primeng';
import { EditarUserService } from "app/editar-user/editar-user.service";
import { Router } from "@angular/router";
import { AppComponent } from "app/app.component";


@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {
  camposVazios = false;
  emailInvalido = false;
  mostraBotao = true;
  sucesso;
  mensagem;
  nome;
  email;
  iduser;
  constructor(private authGuard: AuthGuard, private editarUserService: EditarUserService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.nome = this.authGuard.getUser();
    this.email = this.authGuard.getEmail();
    this.iduser = this.authGuard.getIdUser();

  }

  onSubmit() {

    if (this.nome != '' && this.email != '') {
      console.log("entra");
      if (this.email.includes("@")) {

        this.editarUserService.updateUser(this.iduser, this.nome, this.email).subscribe(

          response => {

            if (response.sucesso == true) {
              this.sucesso = true;
              this.mensagem = response.message;
              this.appComponent.cleanLocalStorage();
              this.mostraBotao = false;
            } else {
              this.sucesso = false;
              this.mensagem = response.message;

            }
          });
      }
      else {
        this.camposVazios = false;
        this.emailInvalido = true;
      }
    } else {
      this.emailInvalido = false;
      this.camposVazios = true;
    }





  }

}
