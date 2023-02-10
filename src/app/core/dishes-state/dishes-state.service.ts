import { Injectable } from '@angular/core';
import {DishResponse, InitialResponse} from "../../models/dish";

@Injectable({
  providedIn: "root"
})
export class DishesStateService {

  private _state: InitialResponse = {count: 0, dishes: []}
  private _savedDishes = new Map<any, DishResponse>()
  constructor() {
  }
  save(dish: DishResponse) {
    this._savedDishes.set(dish._id, dish)
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
