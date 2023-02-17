import {Component, OnInit} from '@angular/core';
import {DishesStateService} from "../../../../core/dishes-state/dishes-state.service";
import {DishResponse} from "../../../../models/dish";

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  constructor(private dishState: DishesStateService) {
  }

  saved: DishResponse[] = []
  empty: boolean
  changed: boolean

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
    this.dishState.delete(dish)
    this.saved.splice(this.saved.indexOf(dish), 1)
    this.empty = this.saved.length === 0
    this.changed = true
  }

  saveDishes() {
    this.changed = false
    this.dishState.change = false
    localStorage.setItem('saved', JSON.stringify(Array.from(this.dishState.saved.values())))
    console.log(localStorage)
  }

}
