import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";
import {Dish, DishResponse, InitialResponse} from "../../../../models/dish";
import {ActivatedRoute} from "@angular/router";
import {DishesStateService} from "../../../../core/dishes-state/dishes-state.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverComponent implements OnInit, OnDestroy {
  dishes: DishResponse[] = []
  count: number = 0
  paginatorSettings: PageEvent = {
    pageSize: 1,
    previousPageIndex: 0,
    length: this.count,
    pageIndex: 0
  }
  lastValue: string

  constructor(private dc: DishControllerService,
              private cdr: ChangeDetectorRef,
              private route: ActivatedRoute,
              private dishesStateService: DishesStateService
  ) {
  }

  ngOnInit() {
    const {dishes, count} = this.route.snapshot.data["dishes"]
    this.dishes = dishes
    this.count = count
    this.dishesStateService.state = this.route.snapshot.data["dishes"]
  }

  ngOnDestroy() {
    this.dishesStateService.state = {dishes: this.dishes, count: this.count}
  }


  search(value: string) {
    this.lastValue = value
    this.dc.getDishes<InitialResponse>(value, 0, this.paginatorSettings.pageSize, true)
      .subscribe(value => {
        const {dishes, count} = value
        this.dishes = dishes
        if (count) {
          this.count = count
        } else {
          this.count = 0
        }
        this.cdr.markForCheck()
      })
  }

  pageEvent(e: PageEvent) {
    const {pageSize, previousPageIndex, length, pageIndex} = e
    this.dc.getDishes<DishResponse[]>(this.lastValue, pageSize * pageIndex, pageSize)
      .subscribe(value => {
        this.dishes = value
        this.cdr.markForCheck()
      })
  }

}
