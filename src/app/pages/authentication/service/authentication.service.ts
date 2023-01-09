import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {url} from "../../../core/constants";
import {catchError, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post(url + 'login', {
      email,
      password
    }).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          return of(new HttpErrorResponse({status: err.status}))
        }
        return of(Error(''))
      })
    )
  }

}
