import {
  ChangeDetectionStrategy, ChangeDetectorRef,
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
              private cdr: ChangeDetectorRef
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

  searchDishes(value: string, from: number, initial: boolean) {
    this.lastValue = value
    this.dishControllerService
      .getDishes<InitialResponse>(value, from, maxNewDocuments, initial)
      .subscribe(value => {
        this.lastNumberOfDoc = 5
        const {dishes, count} = value
        this.dishes = dishes
        this.count = count
        this.checkMaxCount()
        this.cdr.markForCheck()
      })
  }

  slideHandle(e: Event) {
    const container = e.target as HTMLElement
    if (this.lastPosition > container.scrollTop) {
      this.positionConfigStyle.position =
        this.positionConfigStyle.currentPosition -
        (this.lastPosition - container.scrollTop)
    } else {
      this.positionConfigStyle.position =
        this.positionConfigStyle.currentPosition +
        (container.scrollTop - this.lastPosition)
    }
    this.lastPosition = container.scrollTop
  }

  setSearchbarHeight(height: number) {
    this.positionConfigStyle.maxHeight = height
    this.paddingStyle["padding-top"] = `${height + 5}px`
  }

  checkMaxCount(): boolean {
    console.log(this.dishes.length)
    if (this.count <= this.dishes.length) {
      this.hideBtn = true
      return true
    }
    this.hideBtn = false
    return false
  }

  loadMore() {
    if (this.checkMaxCount()) {
      return
    }
    this.dishControllerService
      .getDishes<DishResponse[]>(this.lastValue, this.lastNumberOfDoc, maxNewDocuments, false)
      .subscribe(dishes => {
        this.dishes = [...this.dishes, ...dishes]
        this.checkMaxCount()
        this.cdr.markForCheck()
        this.lastNumberOfDoc += 5
      })
  }
}
