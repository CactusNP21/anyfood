import {Injectable} from '@angular/core';
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor() {
  }

  private _username = ''
  private role = ''
  private token = ''
  private email = ''
  private '_id' = ''
  setUser(userData: User): void {
    console.log(userData)
    const {user, token} = userData
    const {role, username, _id, email} = user
    this._username = username
    this.role = role
    this.token = token
    this._id = _id
    this.email = email
    localStorage.setItem('token', this.token)
  }

  get username(): string {
    return this._username
  }
  get userToken(): string {
    return this.token
  }
  get userId(): string {
    return this._id
  }
  get userRole(): string {
    return this.role
  }
}
