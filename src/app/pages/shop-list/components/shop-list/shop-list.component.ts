import {Component, OnInit} from '@angular/core';
import {ShopListStateService} from "../../../../core/shop-list-state/shop-list-state.service";
import {ShopList} from "../../../../models/shop-list";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit{
  constructor(private ingredients: ShopListStateService) {
  }
  shopList: ShopList[] = []
  ngOnInit() {
    console.log(...this.ingredients.shopList)
    this.shopList = [...this.ingredients.shopList]
  }
}
