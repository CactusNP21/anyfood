import {Injectable} from '@angular/core';
import {DishResponse, InitialResponse} from "../../models/dish";
import {ShopListStateService} from "../shop-list-state/shop-list-state.service";
import {cloneDeep} from "lodash-es";

@Injectable({
  providedIn: "root"
})
export class DishesStateService {

  private _state: InitialResponse = {count: 0, dishes: []}
  private _savedDishes = new Map<any, DishResponse>()

  constructor(private shopList: ShopListStateService) {
  }

  save(dish: DishResponse) {
    this.shopList.sendSaved({old: this._savedDishes.get(dish._id), updated: dish})
    this._savedDishes.set(dish._id, cloneDeep(dish))
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
}
