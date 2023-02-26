import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {URL} from "../../../core/constants";
import {catchError, firstValueFrom, of, timeout} from "rxjs";
import {User} from "../../../models/user";
import {UserStateService} from "../../../core/user-state/user-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private userState: UserStateService) {
  }
  async quickLogin(token: string): Promise<void> {
    try {
      this.userState.userToken = token
      const response = await firstValueFrom(this.http.post<User>(URL + 'auth', {}).pipe(timeout(4000)));
      this.userState.setUser(response);
      return;
    } catch (error) {
      console.error('An error occurred:', error);
      return;
    }
  }
  login(email: string, password: string) {
    return this.http.post<User>(URL + 'auth/login', {
      email,
      password
    }).pipe(
      catchError(this.handleError)
    )
  }
  register(email: string, username: string, password: string) {
    return this.http.post<User>(URL + 'auth/register', {
      email,
      username,
      password
    }).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return of(new HttpErrorResponse({status: error.status}));
  }

}
