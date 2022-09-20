import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/Services/common-service.service';
import jwt_decode from 'jwt-decode'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private Service:CommonServiceService, private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.Service.login(loginModel,"https://www.zenuykuapi.somee.com/api/Auth/login").subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        let token:any=jwt_decode(response.data.token)
        if (token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == "admin") {
          this.router.navigate(["admin"]).then(()=>{
            this.toastrService.success("Admin Girişi Başarılı","Başarılı")
          })
        }else{
          window.location.href="https://www.google.com/"
        
          
          
           
          
        }

      },responseError=>{
        console.log(responseError)
        this.toastrService.error("kullanıcı adı yada şifre hatalı!")
        
      })
    }
  }

}