import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    UserModule
  ],exports:[DashboardComponent,UserComponent]
})
export class MainComponentsModule { }
