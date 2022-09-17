import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { AddUserComponent } from './add-user/add-user.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    RouterModule.forChild([{path:"",component:UserComponent},])
  ],exports:[UserComponent,AddUserComponent]
})
export class UserModule { }
