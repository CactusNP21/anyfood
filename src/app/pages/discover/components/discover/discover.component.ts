import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";
import {DishResponse} from "../../../../models/dish";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverComponent {
  constructor(private dc: DishControllerService,
              private cdr: ChangeDetectorRef
              ) {
  }
  dishes: DishResponse[] = []
  search(value: string) {
    this.dc.getDishes(value).subscribe(value => {
      console.log(value)
      this.dishes = value
      this.cdr.markForCheck()
    })
  }
}
