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
import { AddStepDialogComponent } from './components/steps/add-step-dialog/add-step-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import { InformationComponent } from './components/information/information.component';
import {MatChipsModule} from "@angular/material/chips";
import { PreviewDialogComponent } from './components/preview-dialog/preview-dialog.component';



@NgModule({
  declarations: [
    CreateDishComponent,
    IngredientsComponent,
    StepsComponent,
    AddStepDialogComponent,
    InformationComponent,
    PreviewDialogComponent,
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
        MatDialogModule,
        MatExpansionModule,
        CdkDropList,
        CdkDrag,
        MatChipsModule,
    ]
})
export class CreateDishModule { }
