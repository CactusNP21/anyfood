import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NewDishStateService} from "../../service/new-dish-state.service";
import {Dish, DishInfo, Ingredients, Steps} from "../../../../../models/dish";

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.css']
})
export class PreviewDialogComponent implements OnInit{

  constructor(private dishState: NewDishStateService) {
  }

  dish!: Dish
  info!: DishInfo
  ingredients!: Ingredients
  steps!: Steps
  ngOnInit() {
    this.dish = this.dishState.currentDish
    this.info = this.dish.information
    this.ingredients = this.dish.ingredients
    this.steps = this.dish.steps
  }


}
