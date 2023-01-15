import {Injectable} from '@angular/core';
import {Dish, DishInfo, Ingredients, Steps} from "../../../../models/dish";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewDishStateService {
  completed = new BehaviorSubject<boolean>(false)
  dish: Dish = {
    information: {
      des: '',
      img: '',
      duration: 0,
      title: '',
      topics: undefined,
      servings: 0
    },
    price: 0,
    steps: [],
    ingredients: []
  }

  constructor() {
  }

  validate(): boolean {
    return this.dish.ingredients.length > 0 && this.dish.steps.length > 0
  }

  setIngredients(ing: Ingredients) {
    this.dish.ingredients = ing
    this.completed.next(this.validate())
  }

  setSteps(steps: Steps) {
    this.dish.steps = steps
    this.completed.next(this.validate())
  }

  setMainInfo(info: DishInfo) {
    this.dish.information = info
    this.dish.price = Math.floor(this.dish.ingredients.reduce((a, c) => {
      a += c.price * c.quantity
      return a
    }, 0) / this.dish.information.servings)
    console.log(this.completed)
    console.log(this.dish)
  }

  get currentDish() {
    return this.dish
  }
}
