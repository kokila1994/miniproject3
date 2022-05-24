import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Templet1RoutingModule } from './templet1-routing.module';
import { Childoftemplet1Component } from './childoftrmplet1/childoftemplet1/childoftemplet1.component';


@NgModule({
  declarations: [
    Childoftemplet1Component
  ],
  imports: [
    CommonModule,
    Templet1RoutingModule
  ]
})
export class Templet1Module { }
