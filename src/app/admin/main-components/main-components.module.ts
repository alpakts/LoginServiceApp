import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    DashboardModule,
    UserModule
  ],exports:[DashboardComponent,UserComponent]
})
export class MainComponentsModule { }
