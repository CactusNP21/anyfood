import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish, DishResponse} from "../../models/dish";
import {url} from "../constants";
import {Observable} from "rxjs";
import {UserStateService} from "../user-state/user-state.service";

@Injectable({
  providedIn: 'root'
})
export class DishControllerService {

  constructor(private http: HttpClient,
              private user: UserStateService) {
  }

  getDishes(value: string, from?: string, to?: string): Observable<DishResponse[]> {
    return this.http.post<DishResponse[]>(url + 'dishes/get', {
      filterCustom: value
    })
  }

  addDish(dish: Dish) {
    const {steps, ingredients, price, information} = dish
    const {title, img, topics, duration, servings, des} = information
    return this.http.post(url + 'dishes', {
      title,
      description: des,
      url: img,
      price,
      topics,
      ingredients,
      publisher: this.user.userId,
      servings,
      steps,
      duration
    })
  }


}
