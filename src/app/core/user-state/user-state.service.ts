import {Injectable} from '@angular/core';
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor() {
  }

  private username = ''
  private role = ''
  private token = ''
  private email = ''
  private '_id' = ''
  setUser(userData: User): void {
    const {user, token} = userData
    const {role, username, _id, email} = user
    this.username = username
    this.role = role
    this.token = token
    this._id = _id
    this.email = email
  }

  getUsername(): string {
    return this.username
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
