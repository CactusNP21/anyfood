import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateDishComponent} from "./components/create-dish/create-dish.component";

const routes: Routes = [
  {
    path: '',
    component: CreateDishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDishRoutingModule { }
