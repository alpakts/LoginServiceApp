import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CreateUserModel } from 'src/app/models/CreateUser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  Role: Role[] = [
    {value: 1, viewValue: 'Kullanıcı'},
    {value: 2, viewValue: 'Operatör'},
    {value: 3, viewValue: 'Admin'},
  ];
  constructor(private spinner:NgxSpinnerService,private userService:UserService,private toastr:ToastrService) { }
    user:user=new user();
    
  ngOnInit(): void {
    this.user.email=localStorage.getItem("email");
    this.user.id=parseInt(localStorage.getItem("id"));
    this.user.firstname=localStorage.getItem("name");
    this.user.lastname=localStorage.getItem("surname");
    this.user.role=localStorage.getItem("role");

  }
  Update(id:HTMLInputElement,email:HTMLInputElement,lastname:HTMLInputElement,name:HTMLInputElement,role:MatSelect){
    this.spinner.show("a1");
    const createUser:CreateUserModel=new CreateUserModel();
    createUser.id=parseInt(id.value);
    createUser.email=email.value;
    createUser.firstName=name.value;
    createUser.lastName=lastname.value;
    createUser.role=role.value;
    console.log(createUser)
    this.userService.UpdateUser(createUser).subscribe(response=>{
      this.spinner.hide("a1");
      this.toastr.success("Güncellendi","Kullanıcı Başarıyla Güncellendi");
    },(error:HttpErrorResponse)=>{
      this.toastr.error(error.name,"Hata")
      this.spinner.hide("a1")
    })
    


  }
  
}
interface Role {
  value: number;
  viewValue: string;
}
class user{
  id:number;
  email;
  firstname;
  lastname;
  role;
}
