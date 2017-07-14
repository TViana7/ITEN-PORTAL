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
  
  novaPassword='';
  confirmarNovaPassword='';
  idUserRecebido;
  constructor(private activatedRoute: ActivatedRoute, private recuperarPasswordService:RecuperarPasswordService, private router:Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
        this.idUserRecebido = params['id'];
      });
    console.log(this.idUserRecebido);
  }

  onSubmit(){
    if(this.novaPassword==this.confirmarNovaPassword){
      let pwd= Md5.hashStr(this.novaPassword);
      this.recuperarPasswordService.password(this.idUserRecebido, pwd).subscribe(
                response=>{
                  console.log(response);
                  this.router.navigate(['login']);
                  
            });
    }else{
      console.log("password diferentes");
    }
  }

}
