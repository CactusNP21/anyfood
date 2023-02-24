import {Injectable} from '@angular/core';
import {Dish, DishInfo, Ingredients, Steps} from "../../../../../models/dish";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewDishStateService {
  completed = new BehaviorSubject<boolean>(false)
  dish: Dish = {
    description: '',
    url: '',
    duration: 0,
    title: '',
    topics: [],
    servings: 0,
    price: 0,
    steps: [],
    ingredients: [],
    _id: ''
  }

  constructor() {
  }

  validate(): boolean {
    return this.dish.ingredients.length > 0 && this.dish.steps.length > 0
  }

  setIngredients(ing: Ingredients) {
    console.log(ing)
    this.dish.ingredients = ing
    console.log(ing === this.dish.ingredients)
    this.completed.next(this.validate())
  }

  setSteps(steps: Steps) {
    this.dish.steps = steps
    this.completed.next(this.validate())
  }

  setMainInfo(info: DishInfo) {
    // Capitalize the first letter of the title and make the rest lowercase
    info.title = info.title.charAt(0).toUpperCase() + info.title.slice(1).toLowerCase();

    const ingredients = this.dish.ingredients.map((ingredient) => {
      console.log(ingredient)
      if (ingredient.calculated) {
        return ingredient
      }
      let newQuantity = ingredient.quantity;
      let newPrice = ingredient.price;
      let newUnit = ingredient.unit;
      if (ingredient.unit === 'кг' ||  ingredient.unit === 'л') {
        console.log('I DOLBOEB')
        switch (ingredient.unit) {
          case 'кг' : {
            newUnit = 'г'
            break
          }
          case 'л' : {
            newUnit = 'мл'
            break
          }
        }
        newQuantity *= 1000;
        newPrice = ingredient.price / 1000;
      }
      newQuantity /= info.servings
      return {
        ...ingredient,
        quantity: newQuantity,
        price: newPrice,
        unit: newUnit,
        calculated: true
      };
    });

    const totalCost = ingredients.reduce((acc, ingredient) => {
      return acc + ingredient.price * ingredient.quantity;
    }, 0);
    const pricePerServing = +totalCost.toFixed(0);

    // Update the dish object with the new info
    this.dish = {
      ...this.dish,
      ...info,
      price: pricePerServing,
      ingredients,
    };
    console.log(this.dish);
  }


  get currentDish() {
    return this.dish
  }


}
