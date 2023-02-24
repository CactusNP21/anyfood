import {Injectable, OnInit} from '@angular/core';
import {DishResponse, InitialResponse} from "../../models/dish";
import {ShopListStateService} from "../shop-list-state/shop-list-state.service";
import {cloneDeep} from "lodash-es";
import {SpinnerOverlayService} from "../../feature/spinner-overlay/service/spinner-overlay.service";

@Injectable({
  providedIn: "root"
})
export class DishesStateService {

  private _state: InitialResponse = {count: 0, dishes: []}
  private _savedDishes = new Map<any, DishResponse>()
  private changed = false

  constructor(private shopList: ShopListStateService) {
  }

  set change(state: boolean) {
    this.changed = state
  }

  get change() {
    return this.changed
  }

  save(dish: DishResponse) {
    this.shopList.sendSaved({old: this._savedDishes.get(dish._id), updated: dish})
    this._savedDishes.set(dish._id, cloneDeep(dish))
    this.changed = true
  }

  delete(dish: DishResponse) {
    this._savedDishes.delete(dish._id)
  }

  get saved() {
    return this._savedDishes
  }

  set state(response: InitialResponse) {
    this._state = response
  }

  get state() {
    return this._state
  }

  set savedDishes(dishes: DishResponse[]) {
    dishes.forEach((value) => {
      this.save(value)
    })
  }
  clearSavedDishes() {
    this._savedDishes.clear()
    this.shopList.clearStorage()
  }
}
