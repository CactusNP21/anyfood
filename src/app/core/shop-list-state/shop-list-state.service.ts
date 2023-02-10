import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {ShopList, Update} from "../../models/shop-list";


@Injectable({
  providedIn: 'root'
})

export class ShopListStateService {
  private _storage = new Map<any, ShopList>()
  private _savingsSub = new Subject<Update>()

  constructor() {
    this._savingsSub.asObservable().subscribe(dishes => {
      console.log(dishes)
      this.recalculate(dishes)
    })
  }

  get shopList() {
    return this._storage.values()
  }

  async recalculate({old, updated}: Update): Promise<void> {
    if (old) {
      const difference = updated.servings -  old.servings
      console.log(difference)
      for (const value of old.ingredients) {
        const current = this._storage.get(value.name)

        if (current) {
          console.log(current.quantity)

          current.quantity = current.quantity + (difference * value.quantity);
          console.log(current.quantity)
          this._storage.set(value.name, {
            name: value.name,
            quantity: current.quantity,
            unit: value.unit
          })
        } else {
          this._storage.set(value.name, {
            name: value.name,
            unit: value.unit,
            quantity: value.quantity * updated.servings
          })
        }

      }
      return
    }
    for (const ingredient of updated.ingredients) {
      this._storage.set(ingredient.name, {
        name: ingredient.name,
        unit: ingredient.unit,
        quantity: ingredient.quantity * updated.servings
      })
    }
    return
  }


  sendSaved(update: Update) {
    this._savingsSub.next(update)
  }


}
