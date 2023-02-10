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
  ngOnInit() {
    this.empty = this.dishState.saved.size === 0
    this.saved = [...this.dishState.saved.values()]
  }
  updateSavedDish(dish: DishResponse) {
    this.dishState.save(dish)
  }
}
