import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';
import {DishControllerService} from "../../../core/dish-controller/dish-controller.service";
import {DishResponse, InitialResponse} from "../../../models/dish";
import {DishesStateService} from "../../../core/dishes-state/dishes-state.service";
import {initial} from "lodash-es";
import {maxNewDocuments} from "../../../core/constants";


@Injectable({
  providedIn: 'root'
})
export class InitDishesResolver implements Resolve<InitialResponse> {
  constructor(
    private dcs: DishControllerService,
    private dishesStateService: DishesStateService) {
  }
  inCaseOfError: InitialResponse = {count: 0, dishes: []}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InitialResponse> {

    return this.dishesStateService.state.dishes.length > 0 ?

      of(this.dishesStateService.state) :

      this.dcs.getDishes<InitialResponse>('', 0, maxNewDocuments, true).pipe(
        catchError(err => of(this.inCaseOfError)
      ))
  }
}
