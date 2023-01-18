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


@NgModule({
  declarations: [
    DiscoverComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    DishBriefModule,
    MatButtonModule
  ]
})
export class DiscoverModule { }
