import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  lastNumberOfDoc: number = 0
  constructor(private dc: DishControllerService,
              private cdr: ChangeDetectorRef,
              private route: ActivatedRoute,
              private dishesStateService: DishesStateService,
  ) {}
  ngOnInit() {
    const {dishes, count} = this.route.snapshot.data["dishes"]
    this.dishes = dishes
    this.count = count
    this.dishesStateService.state = this.route.snapshot.data["dishes"]
    this.test2()
  }
  ngOnDestroy() {
    this.dishesStateService.state = {dishes: this.dishes, count: this.count}
  }
  search(value: string, from: number) {
    this.lastValue = value
    this.dc.getDishes<InitialResponse>(value, from, maxNewDocuments, true)
      .subscribe(value => {
        const {dishes, count} = value
        this.dishes = [...this.dishes, ...dishes]
        if (count) {
          this.count = count
          this.checkMaxCount()
        } else {
          this.count = 0
        }
        this.cdr.markForCheck()
      })
  }
  lastPosition = 0
  s = {
    'top': '0',
    cp: 0,
    maxHeight: 0,
    set newTop(position: number) {
      if (position > this.maxHeight) {
        this.cp = this.maxHeight
        this.top = `-${this.maxHeight}px`
        return
      }
      if (position < 0) {
        this.cp = 0
        this.top = `-${0}px`
        return
      }
      this.top = `-${position}px`
      this.cp = position
    }
  }
  padding = {
    'padding-top': '0'
  }
  test(e: Event) {
    const container = e.target as HTMLElement
    if (this.lastPosition > container.scrollTop) {
      this.s.newTop =  this.s.cp - (this.lastPosition - container.scrollTop)
    } else {
      this.s.newTop = this.s.cp + (container.scrollTop - this.lastPosition)
    }
    this.lastPosition = container.scrollTop
  }
  loadMore() {
    this.test2()
  }
  test3(height: number) {
    console.log(height)
    this.s.maxHeight = height
    this.padding["padding-top"] = `${height + 5}px`
  }
  hideBtn = false
  checkMaxCount(): boolean {
    if (this.count <= this.dishes.length){
      this.hideBtn = true
      return true
    }
    return false
  }
  test2() {
    if (this.checkMaxCount()) {
      return
    }
    this.lastNumberOfDoc += 1
    this.search(this.lastValue, this.lastNumberOfDoc)
  }
}
