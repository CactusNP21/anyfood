import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DishComponent} from "./component/dish/dish.component";
import {DishPreloadResolver} from "./resolver/dish-preload.resolver";

const routes: Routes = [
  {path: '', component: DishComponent, resolve: {dish: DishPreloadResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule { }
