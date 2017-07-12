import { Component, OnInit } from '@angular/core';
import { RecuperarPasswordEmailService } from "app/recuperar-password-email/recuperar-password-email.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-recuperar-password-email',
  templateUrl: './recuperar-password-email.component.html',
  styleUrls: ['./recuperar-password-email.component.css']
})
export class RecuperarPasswordEmailComponent implements OnInit {
  email='';
  constructor(private recuperarPasswordEmailService:RecuperarPasswordEmailService, private router:Router) { }

  ngOnInit() {

  }

  onSubmit(){
    if(this.email==''){
      console.log("vazio");
    }else{
            this.recuperarPasswordEmailService.email(this.email).subscribe(
                response=>{
                  console.log(response);
                  this.router.navigate(['login']);      
            });
    }
  }

}
