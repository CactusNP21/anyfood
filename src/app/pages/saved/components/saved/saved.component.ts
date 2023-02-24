import {Component, OnDestroy, OnInit} from '@angular/core';
import {DishesStateService} from "../../../../core/dishes-state/dishes-state.service";
import {DishResponse} from "../../../../models/dish";
import {ShopListStateService} from "../../../../core/shop-list-state/shop-list-state.service";

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  constructor(private dishState: DishesStateService, private shopState: ShopListStateService) {
  }


  saved: DishResponse[] = []
  empty: boolean
  changed: boolean
  canDiscard = false

  ngOnInit() {
    this.empty = this.dishState.saved.size === 0
    if (this.empty) {
    } else {
      this.saved = [...this.dishState.saved.values()]
    }
    this.changed = this.dishState.change
  }

  updateSavedDish(dish: DishResponse) {
    this.dishState.save(dish)
    this.changed = true
  }

  deleteDish(dish: DishResponse) {
    this.saved.splice(this.saved.indexOf(dish), 1)
    this.empty = this.saved.length === 0
    this.changed = true
    this.canDiscard = true
  }

  saveDishes() {
    this.changed = false
    this.canDiscard = false
    this.dishState.change = false
    localStorage.setItem('saved', JSON.stringify(Array.from(this.dishState.saved.values())))
    this.dishState.clearSavedDishes()
    this.dishState.savedDishes = this.saved
    this.shopState.updateMarked()
  }

  discardChanges() {
    this.saved = [...this.dishState.saved.values()]
    this.canDiscard = false
    this.changed = false
  }

}
