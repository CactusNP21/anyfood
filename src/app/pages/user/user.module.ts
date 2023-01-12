import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [
    UserComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule
    ]
})
export class UserModule { }
