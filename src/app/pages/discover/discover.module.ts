import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './components/discover/discover.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { SearchComponent } from './components/search/search.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {DishBriefModule} from "../../shared/dish-brief/dish-brief.module";
import {MatButtonModule} from "@angular/material/button";
import {InitDishesResolver} from "./resolver/init-dishes.resolver";
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DiscoverComponent,
    SearchComponent,
    FilterDialogComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    DishBriefModule,
    MatButtonModule,
    MatSliderModule,
    MatDialogModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [
    InitDishesResolver
  ]
})
export class DiscoverModule { }
