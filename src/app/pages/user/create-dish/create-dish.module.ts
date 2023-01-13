import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDishRoutingModule } from './create-dish-routing.module';
import { CreateDishComponent } from './components/create-dish/create-dish.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { StepsComponent } from './components/steps/steps.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {StopPropModule} from "../../../shared/directives/stop-prop.module";


@NgModule({
  declarations: [
    CreateDishComponent,
    IngredientsComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    CreateDishRoutingModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    StopPropModule,
  ]
})
export class CreateDishModule { }
