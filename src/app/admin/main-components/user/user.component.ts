import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserForListModel } from 'src/app/models/user-forlist';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit ,AfterViewInit
{
  users:UserForListModel[]=[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName',
   'email','status','createDate','updateDate','deleted','role',"edit","delete"];
  dataSource = null;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  showFiller = false;
  constructor(private userService:UserService) { }
  ngAfterViewInit(): void {
    
  }
  

  ngOnInit(): void {
    
    this.GetUserList();
  }
  GetUserList<UserForListModel>(){
    this.userService.getAll<UserForListModel>("http://zenuykuapi.somee.com/api/Users/GetAll").
    subscribe(response=>{
      let form:UserForListModel[]=Object.assign(this.users,response.data)
      
      form 
      console.log(form)
      
      this.dataSource=new MatTableDataSource<UserForListModel>(response.data);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
    },error=>{
      console.log(error)
    }
    )
    
  }
  Delete(id:number){
    
  }

}
