import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopListRoutingModule } from './shop-list-routing.module';
import { ShopListComponent } from './components/shop-list/shop-list.component';


@NgModule({
  declarations: [
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ShopListRoutingModule
  ]
})
export class ShopListModule { }
