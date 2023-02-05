import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { DishBriefComponent } from './dish-brief/dish-brief.component';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    DishBriefComponent
  ],
  exports: [
    DishBriefComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        NgOptimizedImage
    ]
})
export class DishBriefModule { }
