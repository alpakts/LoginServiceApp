import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/register-model';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform:FormGroup

  constructor(private builder:FormBuilder,private userService:UserService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.CreateRegisterForm();
  }
  CreateRegisterForm(){
    this.registerform=this.builder.group({
      email:["",Validators.required],
      password:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],

    })
  }
  Register(){
    let form:RegisterModel=Object.assign({},this.registerform.value)
    this.userService.Register(form).subscribe(response=>{
      this.toastr.success("Kayıt Başarılı","başarılı");
      this.router.navigate(["login"]);
      
    } ,error=>{
      this.toastr.error("Hatalı bilgi girişi", "Hata")
    })
  }

}
