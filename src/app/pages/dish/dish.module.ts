import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishRoutingModule } from './dish-routing.module';
import { DishComponent } from './component/dish/dish.component';
import {DishDetailedModule} from "../../shared/dish-detailed/dish-detailed.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    DishComponent
  ],
  imports: [
    CommonModule,
    DishRoutingModule,
    DishDetailedModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class DishModule { }
