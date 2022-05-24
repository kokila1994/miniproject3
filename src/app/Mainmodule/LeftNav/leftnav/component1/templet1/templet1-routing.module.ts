import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Childoftemplet1Component } from './childoftrmplet1/childoftemplet1/childoftemplet1.component';

const routes: Routes = [
  {path:'child',component:Childoftemplet1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Templet1RoutingModule { }
