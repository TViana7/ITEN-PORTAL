import { Component, OnInit } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";
import {MessagesModule} from 'primeng/primeng';
import { EditarUserService } from "app/editar-user/editar-user.service";
import { Router } from "@angular/router";
import { AppComponent } from "app/app.component";


@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {

  nome;
  email;
  iduser;
  constructor(private authGuard:AuthGuard, private editarUserService:EditarUserService, private router:Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.nome=this.authGuard.getUser();
    this.email=this.authGuard.getEmail();
    this.iduser=this.authGuard.getIdUser();

  }

  onSubmit(){

    this.editarUserService.updateUser(this.iduser, this.nome, this.email).subscribe(

        response=>{

          this.appComponent.logout();
            

    });





  }

}
