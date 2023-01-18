import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../../../core/constants";
import { DishResponse} from "../../../models/dish";

@Injectable({
  providedIn: 'root'
})
export class AdminControllerService {

  constructor(private http: HttpClient) {
  }

  route: string = 'dishes/'

  getUnapprovedDishes() {
    return this.http.post<DishResponse[]>(url + this.route + 'unapproved', {})
  }
  approveDish(id: string) {
    return this.http.patch(url + this.route + id + '/approve', {})
  }
}
