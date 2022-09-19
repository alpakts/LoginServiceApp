import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserForListModel } from 'src/app/models/user-forlist';
import { UserService } from 'src/app/Services/user.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit ,AfterViewInit
{
  dialogRef:MatDialogRef<DialogComponent,any>;
  users:UserForListModel[]=[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName',
   'email','status','createDate','updateDate','deleted','role',"edit","delete"];
  dataSource = null;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  showFiller = false;
  constructor(private userService:UserService,
    private toastr:ToastrService,private spinner:NgxSpinnerService,public dialog: MatDialog,private router:Router) { }
  ngAfterViewInit(): void {
    
  }
  

  ngOnInit(): void {
    
    this.GetUserList();
  }
  GetUserList<UserForListModel>(){
    this.userService.getAll<UserForListModel>("http://zenuykuapi.somee.com/api/Users/GetAll").
    subscribe(response=>{
      let form:UserForListModel[]=Object.assign(this.users,response.data)
      this.dataSource=new MatTableDataSource<UserForListModel>(response.data);
      this.dataSource.paginator = this.paginator;
    }
    )
    
  }
  Delete(id:number){
    
      this.spinner.show("a1")
    this.userService.Delete("https://zenuykuapi.somee.com/api/Users/delete",id).subscribe(Response=>{
      this.toastr.success("Kullanıcı Başarıyla Silindi","Başarılı")
      this.GetUserList();
      
      this.spinner.hide("a1")
      this.dataSource.paginator = this.paginator;
    })
    
    
    
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string){
  
    let dialogRef=this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,

      
      
    })
    
    
   
  }
  Navigate(id:number,name:string,surname:string,email:string,role:string){
    localStorage.setItem("id",id.toString());
    localStorage.setItem("name",name);
    localStorage.setItem("surname",surname);
    localStorage.setItem("email",email);
    localStorage.setItem("role",role);
    this.router.navigateByUrl("updateUser").then(()=>{
      console.log(id)
    })
  
}}

