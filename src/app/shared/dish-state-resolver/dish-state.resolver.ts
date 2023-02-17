import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DishesStateService} from "../../core/dishes-state/dishes-state.service";
import {DishResponse} from "../../models/dish";
import {ShopListStateService} from "../../core/shop-list-state/shop-list-state.service";

@Injectable({
  providedIn: 'root'
})
export class DishStateResolver implements Resolve<void> {
  constructor(private dishState: DishesStateService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    if (localStorage.getItem('saved')) {
      this.dishState.savedDishes = JSON.parse(localStorage.getItem('saved')!)
      return;
    }
  }
}
