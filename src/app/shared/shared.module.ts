import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ContentLayoutComponent, AuthLayoutComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
