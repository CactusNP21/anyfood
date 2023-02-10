import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DishResponse} from "../../../models/dish";
import {cloneDeep} from "lodash-es";

@Component({
  selector: 'app-dish-detailed',
  templateUrl: './dish-detailed.component.html',
  styleUrls: ['./dish-detailed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishDetailedComponent implements OnInit{
  @Input() dish!: DishResponse
  @Output() servUpdate = new EventEmitter<DishResponse>()
  servings = {
    count: 1,
    dishClone: this.dish,
    emitter: this.servUpdate,
    add: function () {
      this.count += 1
      console.log(this.dishClone)
      this.dishClone.servings = this.count
      this.emitter.emit(this.dishClone)
      return
    },
    subtract: function () {
      if (this.count > 1) {
        this.count -= 1
        this.dishClone.servings = this.count
        this.emitter.emit(this.dishClone)
      }
      return
    }
  }
  ngOnInit() {
    this.servings.count = this.dish.servings
    this.servings.dishClone = cloneDeep(this.dish)
  }

}
