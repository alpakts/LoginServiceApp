import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin/guards/admin.guard';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/main-components/dashboard/dashboard.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent,},
  {path:"login/register",component:RegisterComponent},
  {path:"admin",component:LayoutComponent,canActivate:[AdminGuard],children:[
    {path:"",component:DashboardComponent,canActivate:[AdminGuard]},
    {path:"users",loadChildren:()=>import("./admin/main-components/user/user.module")
    .then(module=>module.UserModule),canActivate:[AdminGuard]}
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
