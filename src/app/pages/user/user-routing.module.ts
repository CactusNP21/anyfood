import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {
    path: '', component: UserComponent,
  },
  {
    path: 'create-dish', loadChildren: () => import('./pages/create-dish/create-dish.module').then(m => m.CreateDishModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
