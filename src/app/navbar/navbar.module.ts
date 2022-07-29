import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MaterialModule
  ]
})
export class NavbarModule { }
