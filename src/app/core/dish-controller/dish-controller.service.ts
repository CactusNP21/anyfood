import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish, DishResponse} from "../../models/dish";
import {searchConfig, url} from "../constants";
import {BehaviorSubject, Observable} from "rxjs";
import {UserStateService} from "../user-state/user-state.service";
import {SearchConfig} from "../../models/search-config";

@Injectable({
  providedIn: 'root'
})
export class DishControllerService {

  configSubject = new BehaviorSubject<SearchConfig>(searchConfig)


  constructor(private http: HttpClient,
              private user: UserStateService) {
  }

  getDishes(value: string, from?: string, to?: string): Observable<DishResponse[]> {
    return this.http.post<DishResponse[]>(url + 'dishes/get', {
      customFilter: value
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
  getDish(id: string) {
    return this.http.get<DishResponse>(url + 'dishes/' + id)
  }


}
