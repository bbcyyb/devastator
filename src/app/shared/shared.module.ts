import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [ContentLayoutComponent, AuthLayoutComponent, FooterComponent, HeaderComponent, ChartComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
