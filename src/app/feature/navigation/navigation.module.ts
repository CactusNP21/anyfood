import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import {RouterLink} from "@angular/router";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        MatButtonToggleModule,
        MatIconModule
    ]
})
export class NavigationModule { }
