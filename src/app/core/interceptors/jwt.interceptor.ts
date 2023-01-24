import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserStateService} from "../user-state/user-state.service";
import {SpinnerOverlayService} from "../../feature/spinner-overlay/service/spinner-overlay.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private user: UserStateService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.has('skip')) {
      return next.handle(request.clone({
        headers: request.headers.delete('skip')
      }));
    }
    if (this.user.userToken) {
      const bearerReq = request.clone({
        headers: request.headers.set('Authorization',
          'Bearer ' + this.user.userToken),
      })
      console.log(bearerReq)
      return next.handle(bearerReq)
    }
    // if (sessionStorage.getItem('token')! || localStorage.getItem('token')!) {
    //   const bearerReq = request.clone({
    //     headers: request.headers.set('Authorization',
    //       'Bearer ' + (sessionStorage.getItem('token')! || localStorage.getItem('token'))!)
    //   })
    //   console.log(bearerReq)
    //   return next.handle(bearerReq)
    // }

    return next.handle(request);
  }
}
