import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CreateUserModel } from 'src/app/models/CreateUser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  Role: Role[] = [
    {value: 1, viewValue: 'Kullanıcı'},
    {value: 2, viewValue: 'Operatör'},
    {value: 3, viewValue: 'Admin'},
  ];
  constructor(private userService:UserService,private toastr:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
  Create(email:HTMLInputElement,lastname:HTMLInputElement,name:HTMLInputElement,password:HTMLInputElement,role:MatSelect){
    this.spinner.show("a1");
    const createUser:CreateUserModel=new CreateUserModel();
    createUser.email=email.value;
    createUser.firstName=name.value;
    createUser.lastName=lastname.value;
    createUser.password=password.value;
    createUser.role=role.value;
    this.userService.createUser(createUser).subscribe(response=>{
      this.spinner.hide("a1");
      this.toastr.success("kullanıcı eklendi","kullanıcı başarıyla eklendi");
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
