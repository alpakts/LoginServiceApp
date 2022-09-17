import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponentsModule } from './main-components/main-components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MainComponentsModule
  ],
  exports:[LayoutModule]
})
export class AdminModule { }
