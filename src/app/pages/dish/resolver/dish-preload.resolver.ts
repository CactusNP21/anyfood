import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {filter, map, Observable, of, switchMap} from 'rxjs';
import {Dish, DishResponse} from "../../../models/dish";
import {DishControllerService} from "../../../core/dish-controller/dish-controller.service";

@Injectable({
  providedIn: 'root'
})
export class DishPreloadResolver implements Resolve<DishResponse> {
  constructor(private dishControllerService: DishControllerService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DishResponse> {
   return this.dishControllerService.getDish(route.queryParamMap.get('number')!)
  }
}
