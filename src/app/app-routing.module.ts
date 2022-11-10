import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent}from '../app/login/login.component';
import {HomeComponent}from '../app/home/home.component'
import { HomeGuardGuard } from './home-guard.guard';
import { JobpageComponent } from './home/jobpage/jobpage.component';
import { NewjobComponent } from './home/newjob/newjob.component';




const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent,canActivate:[HomeGuardGuard],children:[
    {path:'jobpage',component:JobpageComponent},
    {path:'newjob',component:NewjobComponent},
    {path:'newjob/:id',component:NewjobComponent}
  ]},
  {path:'**',component:LoginComponent}
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
