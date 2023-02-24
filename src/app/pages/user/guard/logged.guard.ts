import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {delay, map, Observable, of} from 'rxjs';
import {UserStateService} from "../../../core/user-state/user-state.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(private user: UserStateService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return of(null).pipe(
      map(data => {
        if (this.user.userRole === 'admin') {
          this.router.navigate(['administrate'])
          return false
        }
        console.log(this.user.userToken)
        if (this.user.userToken) {
          return true
        }
        this.router.navigate(['auth'])
        return false
      })
    )
  }

}
