import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShopListStateService} from "../../../../core/shop-list-state/shop-list-state.service";
import {ShopList} from "../../../../models/shop-list";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit, OnDestroy{
  constructor(private ingredients: ShopListStateService) {
  }
  shopList: ShopList[] = []
  ngOnInit() {
    this.shopList = [...this.ingredients.shopList]
  }
  ngOnDestroy() {
    console.log(this.shopList.filter(value => value.marked))
    this.ingredients.updateMarked()
  }


}
