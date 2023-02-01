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
    console.log(ing)
    this.dish.ingredients = ing
    this.completed.next(this.validate())
  }

  setSteps(steps: Steps) {
    this.dish.steps = steps
    this.completed.next(this.validate())
  }

  setMainInfo(info: DishInfo) {
    info.title = info.title.charAt(0).toUpperCase() + info.title.slice(1).toLowerCase()
    this.dish.information = info
    this.dish.price = Math.floor(this.dish.ingredients.reduce((a, c) => {
      a += c.price * c.quantity
      return a
    }, 0) / this.dish.information.servings)
    this.dish.ingredients = this.dish.ingredients.map(value => {
      switch (value.unit) {
        case 'кг':
          if (value.quantity > 1) {
            break
          } else {
            value.unit = 'г'
            value.quantity *= 1000
            value.price /= 1000
            break
          }
      }
      value.quantity = Math.floor(value.quantity / info.servings)
      return value
    })
    console.log(this.completed)
    console.log(this.dish)
  }

  get currentDish() {
    return this.dish
  }


}
