import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Templet1Component } from './component1/templet1/templet1.component';
import { Templet2Component } from './component2/templet2/templet2.component';

const routes: Routes = [
  {path:'templet1',component:Templet1Component},
  {path:'templet1',loadChildren:()=>import('./component1/templet1/templet1.module').then(m=>m.Templet1Module)},
  {path:'templet2',component:Templet2Component},
  {path:'templet2',loadChildren:()=>import('./component2/templet2/templet2.component').then(m=>m.Templet2Component)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeftnavRoutingModule { }
