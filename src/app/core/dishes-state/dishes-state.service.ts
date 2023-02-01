import { Injectable } from '@angular/core';
import {DishResponse, InitialResponse} from "../../models/dish";

@Injectable({
  providedIn: "root"
})
export class DishesStateService {

  private _state: InitialResponse = {count: 0, dishes: []}

  constructor() {
  }
  set state(response: InitialResponse) {
    this._state = response
  }

  get state() {
    return this._state
  }
}
