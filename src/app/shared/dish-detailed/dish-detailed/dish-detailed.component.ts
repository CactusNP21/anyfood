import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DishResponse} from "../../../models/dish";

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
    dishRef: this.dish,
    emitter: this.servUpdate,
    add: function () {
      this.count += 1
      console.log(this.dishRef)
      this.dishRef.servings = this.count
      this.emitter.emit(this.dishRef)
      return
    },
    subtract: function () {
      if (this.count > 1) {
        this.count -= 1
        this.dishRef.servings = this.count
        this.emitter.emit(this.dishRef)
      }
      return
    }
  }
  ngOnInit() {
    this.servings.count = this.dish.servings
    this.servings.dishRef = this.dish
  }

}
