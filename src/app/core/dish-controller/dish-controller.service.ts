import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish, DishResponse} from "../../models/dish";
import {initialSearchConfig, URL} from "../constants";
import {Observable} from "rxjs";
import {UserStateService} from "../user-state/user-state.service";
import {SearchConfig} from "../../models/search-config";

@Injectable({
  providedIn: 'root'
})
export class DishControllerService {

  private _config: SearchConfig = initialSearchConfig

  set config(config: SearchConfig) {
    this._config = config
  }

  get config(): SearchConfig {
    return this._config
  }

  constructor(private http: HttpClient,
              private user: UserStateService) {
  }

  getDishes<T>(value: string, from?: number, to?: number, initial?: boolean):
    Observable<T>
  {
    return this.http.post<T>(URL + 'dishes/get', {
      customFilter: value,
      initial,
      config: this._config,
      limit: to,
      skip: from
    })
  }

  addDish(dish: Dish) {
    const {steps, ingredients, price} = dish
    const {title, url, topics, duration, servings, description} = dish
    return this.http.post(URL + 'dishes', {
      title,
      description,
      url,
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
    return this.http.get<DishResponse>(URL + 'dishes/' + id)
  }


}
