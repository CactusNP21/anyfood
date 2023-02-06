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

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverComponent implements OnInit, OnDestroy {
  dishes: DishResponse[] = []
  count: number = 0
  limit = 40
  lastValue: string
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
  }
  ngOnDestroy() {
    this.dishesStateService.state = {dishes: this.dishes, count: this.count}
  }
  search(value: string) {
    this.lastValue = value
    this.dc.getDishes<InitialResponse>(value, 0, 5, true)
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
  lastPosition = 0
  s = {
    'top': `${0}px`,
    cp: 0,
    set newTop(position: number) {
      if (position > 170) {
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
  hideBtn = false
  test2() {
    if (this.count * 3 <= this.dishes.length){
      this.hideBtn = true
      return
    }
    console.log('scrolled')
    this.dishes.push({
      _id: '6',
      url: '/',
      servings: 3,
      description: 'TESTSSSSS',
      duration: 25,
      ingredients: [{price: 20, unit: 'hh', quantity: 5, name: 'ddd', mainImg: 'f'}],
      price: 256,
      steps: [{description: 'test',title: 'test1'}],
      title: 'TEST DDD',
      topics: ['test']
    })
    this.dishes.push({
      _id: '6',
      url: '/',
      servings: 3,
      description: 'TESTSSSSS',
      duration: 25,
      ingredients: [{price: 20, unit: 'hh', quantity: 5, name: 'ddd', mainImg: 'f'}],
      price: 256,
      steps: [{description: 'test',title: 'test1'}],
      title: 'TEST DDD',
      topics: ['test']
    })
    this.dishes.push({
      _id: '6',
      url: '/',
      servings: 3,
      description: 'TESTSSSSS',
      duration: 25,
      ingredients: [{price: 20, unit: 'hh', quantity: 5, name: 'ddd', mainImg: 'f'}],
      price: 256,
      steps: [{description: 'test',title: 'test1'}],
      title: 'TEST DDD',
      topics: ['test']
    })
    this.dishes.push({
      _id: '6',
      url: '/',
      servings: 3,
      description: 'TESTSSSSS',
      duration: 25,
      ingredients: [{price: 20, unit: 'hh', quantity: 5, name: 'ddd', mainImg: 'f'}],
      price: 256,
      steps: [{description: 'test',title: 'test1'}],
      title: 'TEST DDD',
      topics: ['test']
    })
    this.dishes.push({
      _id: '6',
      url: '/',
      servings: 3,
      description: 'TESTSSSSS',
      duration: 25,
      ingredients: [{price: 20, unit: 'hh', quantity: 5, name: 'ddd', mainImg: 'f'}],
      price: 256,
      steps: [{description: 'test',title: 'test1'}],
      title: 'TEST DDD',
      topics: ['test']
    })
    this.dishes.push({
      _id: '6',
      url: '/',
      servings: 3,
      description: 'TESTSSSSS',
      duration: 25,
      ingredients: [{price: 20, unit: 'hh', quantity: 5, name: 'ddd', mainImg: 'f'}],
      price: 256,
      steps: [{description: 'test',title: 'test1'}],
      title: 'TEST DDD',
      topics: ['test']
    })
    this.dishes.push({
      _id: '6',
      url: '/',
      servings: 3,
      description: 'TESTSSSSS',
      duration: 25,
      ingredients: [{price: 20, unit: 'hh', quantity: 5, name: 'ddd', mainImg: 'f'}],
      price: 256,
      steps: [{description: 'test',title: 'test1'}],
      title: 'TEST DDD',
      topics: ['test']
    })
  }
}
