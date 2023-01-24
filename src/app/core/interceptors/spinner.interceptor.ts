import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {SpinnerOverlayService} from "../../feature/spinner-overlay/service/spinner-overlay.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  requests = 0
  constructor(private spinner: SpinnerOverlayService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.requests++
    this.spinner.show()
    return next.handle(request).pipe(
      finalize(() => {
        this.requests--;
        if (this.requests === 0) {
          this.spinner.hide()
        }
      })
    );
  }
}
