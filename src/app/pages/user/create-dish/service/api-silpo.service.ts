import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from "rxjs";
export interface SilpoRes extends Items{
  items: Items[]
}
export interface Items{
  name: string,
  price: number,
  unit: string
  mainImage: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiSilpoService {

  items = new BehaviorSubject<Items[]>([])

  constructor(private http: HttpClient) { }
  getItems () {
    return this.items.asObservable()
  }
  searchItems(name: string) {
    this.http.post<SilpoRes>('https://api.catalog.ecom.silpo.ua/api/2.0/exec/EcomCatalogGlobal',
      {
        method: 'GetSimpleCatalogItems',
        data: {
          From: 1,
          To: 5,
          customFilter: name,
          filialId: '2257',
          skuPerPage: 100,
          pageNumber: 1,
        },
      }).subscribe(value => {
        this.items.next(value.items)
    })
  }
}
