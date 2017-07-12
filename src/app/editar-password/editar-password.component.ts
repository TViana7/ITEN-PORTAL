import { Component, OnInit } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";
import { Router } from "@angular/router";
import { AppComponent } from "app/app.component";
import { EditarPasswordService } from "app/editar-password/editar-password.service";

@Component({
  selector: 'app-editar-password',
  templateUrl: './editar-password.component.html',
  styleUrls: ['./editar-password.component.css']
})
export class EditarPasswordComponent implements OnInit {

  passwordAtual='';
  novaPassword='';
  confirmarPassword='';
  iduser;

  constructor(private authGuard:AuthGuard,  private router:Router, private appComponent: AppComponent, private editarPasswordService:EditarPasswordService) { }

  ngOnInit() {
    this.iduser=this.authGuard.getIdUser();
  }

  onSubmit(){
    if(this.passwordAtual!=''||this.novaPassword!=''||this.confirmarPassword!=''){
      if(this.novaPassword==this.confirmarPassword){
        this.editarPasswordService.updatePassword(this.iduser, this.passwordAtual, this.novaPassword).subscribe(
        response=>{
          this.appComponent.logout();
    });

      }else{
        console.log("novas passwords nao correspondem");
      }

    }else{
      console.log("campos vazios");
    }
  }
}
