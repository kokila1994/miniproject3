import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './Authentication/LoginForm/login-form/login-form.component';
import { RegsterformsComponent } from './Authentication/RegisterForms/regsterforms/regsterforms.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Mainmodule/Header/header/header.component';
import { BodyComponent } from './Mainmodule/Body/body/body.component';
import { LeftnavComponent } from './Mainmodule/LeftNav/leftnav/leftnav.component';
import { SharedDirective } from './Shared Services/shared.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegsterformsComponent,
    HeaderComponent,
    BodyComponent,
    LeftnavComponent,
    SharedDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
