import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDishRoutingModule } from './create-dish-routing.module';
import { CreateDishComponent } from './components/create-dish/create-dish.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { StepsComponent } from './components/steps/steps.component';


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
        MatAutocompleteModule
    ]
})
export class CreateDishModule { }
