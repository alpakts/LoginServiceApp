import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MainComponentsModule } from './main-components/main-components.module';
import { DialogComponent } from './dialog/dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';




@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatDialogModule,
    MainComponentsModule,
  ],
  exports:[LayoutModule,DialogComponent],
  declarations: [
    DialogComponent
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
})
export class AdminModule { }
