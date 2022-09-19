import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MainComponentsModule } from './main-components/main-components.module';
import { DialogComponent } from './dialog/dialog.component';




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
  
})
export class AdminModule { }
