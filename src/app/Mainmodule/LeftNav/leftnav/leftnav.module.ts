import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftnavRoutingModule } from './leftnav-routing.module';
import { Templet1Component } from './component1/templet1/templet1.component';
import { Templet2Component } from './component2/templet2/templet2.component';


@NgModule({
  declarations: [
    Templet1Component,
    Templet2Component
  ],
  imports: [
    CommonModule,
    LeftnavRoutingModule
  ]
})
export class LeftnavModule { }
