import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {url} from "../../../core/constants";
import {catchError, of} from "rxjs";
import {User} from "../../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<User>(url + 'auth/login', {
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

  register(email: string, username: string, password: string) {
    return this.http.post<User>(url + 'auth/register', {
      email,
      username,
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

  test(email: string, password: string) {
    return this.http.post("https://recipe-backend-test.vercel.app/auth/login", {
      email,
      password
    })
  }

}
