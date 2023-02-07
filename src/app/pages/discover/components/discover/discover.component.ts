import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";
import {DishResponse, InitialResponse} from "../../../../models/dish";
import {ActivatedRoute} from "@angular/router";
import {DishesStateService} from "../../../../core/dishes-state/dishes-state.service";
import {maxNewDocuments} from "../../../../core/constants";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverComponent implements OnInit, OnDestroy {
  dishes: DishResponse[] = []
  count: number = 0
  lastValue: string
  lastNumberOfDoc: number = 5
  lastPosition: number = 0
  hideBtn = false
  positionConfigStyle = {
    'top': '0',
    currentPosition: 0,
    maxHeight: 0,
    set position(position: number) {
      if (position > this.maxHeight) {
        this.currentPosition = this.maxHeight
        this.top = `-${this.maxHeight}px`
        return
      }
      if (position < 0) {
        this.currentPosition = 0
        this.top = `-${0}px`
        return
      }
      this.top = `-${position}px`
      this.currentPosition = position
    }
  }
  paddingStyle = {
    'padding-top': '0'
  }
  constructor(private dishControllerService: DishControllerService,
              private route: ActivatedRoute,
              private dishesStateService: DishesStateService,
  ) {
  }
  ngOnInit() {
    const {dishes, count} = this.route.snapshot.data["dishes"]
    this.dishes = dishes
    this.count = count
    this.checkMaxCount()
  }
  ngOnDestroy() {
    this.dishesStateService.state = {dishes: this.dishes, count: this.count}
  }
  searchDishes(value: string, from: number) {
    this.lastValue = value
    this.dishControllerService
      .getDishes<InitialResponse>(value, from, maxNewDocuments, true)
      .subscribe(value => {
        const {dishes, count} = value
        this.dishes = [...this.dishes, ...dishes]
        if (count) {
          this.count = count
          this.checkMaxCount()
        } else {
          this.count = 0
        }
      })
  }
  slideHandle(e: Event) {
    const container = e.target as HTMLElement
    if (this.lastPosition > container.scrollTop) {
      this.positionConfigStyle.position = this.positionConfigStyle.currentPosition - (this.lastPosition - container.scrollTop)
    } else {
      this.positionConfigStyle.position = this.positionConfigStyle.currentPosition + (container.scrollTop - this.lastPosition)
    }
    this.lastPosition = container.scrollTop
  }
  setSearchbarHeight(height: number) {
    this.positionConfigStyle.maxHeight = height
    this.paddingStyle["padding-top"] = `${height + 5}px`
  }
  checkMaxCount(): boolean {
    if (this.count <= this.dishes.length) {
      this.hideBtn = true
      return true
    }
    return false
  }
  loadMore() {
    if (this.checkMaxCount()) {
      return
    }
    this.lastNumberOfDoc += 1
    this.searchDishes(this.lastValue, this.lastNumberOfDoc)
  }
}
