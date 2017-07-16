import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecuperarPasswordService } from "app/recuperar-password/recuperar-password.service";
import { Md5 } from 'ts-md5/dist/md5';


@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  novaPassword = '';
  confirmarNovaPassword = '';
  idUserRecebido;
  input = true;
  botaocriar = true;
  botaoLogin = false;
  erro = false;
  mensagem1;
  mensagem2;
  sucesso;

  constructor(private activatedRoute: ActivatedRoute, private recuperarPasswordService: RecuperarPasswordService, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.idUserRecebido = params['id'];
    });
    console.log(this.idUserRecebido);
  }

  voltar(){
    this.router.navigate(["login"]);
  }

  onSubmit() {
    if (this.novaPassword != '' && this.confirmarNovaPassword != '') {
      if (this.novaPassword == this.confirmarNovaPassword) {
        if (this.novaPassword.length >= 5) {
          let pwd = Md5.hashStr(this.novaPassword);
          this.recuperarPasswordService.password(this.idUserRecebido, pwd).subscribe(
            response => {
              if (response.sucesso == true) {
                this.input = false;
                this.botaocriar = false;
                this.botaoLogin = true;
                this.sucesso=true;
                this.mensagem2=response.message;
              } else {
                this.input = false;
                this.botaocriar = false;
                this.botaoLogin = true;
                this.sucesso=true;
                this.mensagem2=response.message;
              }
            });
        } else {
          this.erro = true;
          this.mensagem1 = "*A password deve conter pelo menos 5 caracteres!";
        }
      } else {
        this.erro = true;
        this.mensagem1 = "*Passwords diferentes!";
      }
    } else {
      this.erro = true;
      this.mensagem1 = "*Campo(s) vazios!";
    }
  }

}
