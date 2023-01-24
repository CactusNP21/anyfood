import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiscoverComponent} from "./components/discover/discover.component";
import {InitDishesResolver} from "./resolver/init-dishes.resolver";

const routes: Routes = [
  {path: '', component: DiscoverComponent, resolve: {dishes: InitDishesResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
