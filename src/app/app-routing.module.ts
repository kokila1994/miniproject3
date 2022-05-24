import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Authentication/LoginForm/login-form/login-form.component';
import { RegsterformsComponent } from './Authentication/RegisterForms/regsterforms/regsterforms.component';
import { BodyComponent } from './Mainmodule/Body/body/body.component';
import { HeaderComponent } from './Mainmodule/Header/header/header.component';
import { LeftnavComponent } from './Mainmodule/LeftNav/leftnav/leftnav.component';


const routes: Routes = [
  {path:'',component:RegsterformsComponent},
  {path:'loginform',component:LoginFormComponent},
  {path:'header',component:HeaderComponent},
  {path:'mainpage',component:BodyComponent},
  {path:'leftnav',component:LeftnavComponent},
  {path:'leftnav',loadChildren:() => import('./Mainmodule/LeftNav/leftnav/leftnav.module').then(m=>m.LeftnavModule)},


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
