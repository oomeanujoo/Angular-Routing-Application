import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './navbar/about/about.component';
import { HomeComponent } from './navbar/home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
  children: [ {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent } ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
