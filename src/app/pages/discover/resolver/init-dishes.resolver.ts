import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';
import {DishControllerService} from "../../../core/dish-controller/dish-controller.service";
import {DishResponse} from "../../../models/dish";

@Injectable({
  providedIn: 'root'
})
export class InitDishesResolver implements Resolve<DishResponse[]> {
  constructor(private dcs: DishControllerService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DishResponse[]> {
    return this.dcs.getDishes('').pipe(
      catchError(err => of([]))
    );
  }
}
