import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedRoutingModule } from './saved-routing.module';
import { SavedComponent } from './components/saved/saved.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {DishDetailedModule} from "../../shared/dish-detailed/dish-detailed.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SavedComponent
  ],
    imports: [
        CommonModule,
        SavedRoutingModule,
        MatExpansionModule,
        DishDetailedModule,
        MatButtonModule
    ]
})
export class SavedModule { }
