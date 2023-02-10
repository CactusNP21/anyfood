import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SavedComponent} from "./components/saved/saved.component";

const routes: Routes = [
  {path: '', component: SavedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedRoutingModule { }
