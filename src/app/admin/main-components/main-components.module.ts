import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { UpdateUserComponent } from './user/update-user/update-user.component';





@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    DashboardModule,
    UserModule
  ],exports:[DashboardComponent,UserComponent,UpdateUserComponent],
  
})
export class MainComponentsModule { }
