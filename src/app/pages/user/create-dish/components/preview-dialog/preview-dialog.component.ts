import {Component, OnInit} from '@angular/core';
import {NewDishStateService} from "../../service/new-dish-state.service";
import {Dish, DishInfo, Ingredients, Steps} from "../../../../../models/dish";
import {DishControllerService} from "../../../../../core/dish-controller/dish-controller.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.css']
})
export class PreviewDialogComponent implements OnInit{

  constructor(private dishState: NewDishStateService,
              private dishController: DishControllerService,
              private snack: MatSnackBar,
              private router: Router) {
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

  postDish() {
    this.dishController.addDish(this.dish).subscribe(value => {
      console.log(value)
      this.snack.open('Успішно відправлено на модерацію', 'Ок', {
        horizontalPosition: 'center',
        verticalPosition: "top",
        duration: 1000
      })
      this.router.navigate(['user'])
    })
  }

}
