import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish, DishResponse, InitialResponse} from "../../models/dish";
import {searchConfig, url} from "../constants";
import {mergeMap, Observable, switchMap} from "rxjs";
import {UserStateService} from "../user-state/user-state.service";
import {SearchConfig} from "../../models/search-config";

@Injectable({
  providedIn: 'root'
})
export class DishControllerService {

  private _config: SearchConfig = searchConfig

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
    return this.http.post<T>(url + 'dishes/get', {
      customFilter: value,
      initial,
      config: this._config,
      limit: to,
      skip: from
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
