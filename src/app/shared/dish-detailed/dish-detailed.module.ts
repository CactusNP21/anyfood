import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishDetailedComponent } from './dish-detailed/dish-detailed.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    DishDetailedComponent
  ],
  exports: [
    DishDetailedComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class DishDetailedModule { }
