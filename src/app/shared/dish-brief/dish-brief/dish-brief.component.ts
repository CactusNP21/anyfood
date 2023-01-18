import {Component, Input} from '@angular/core';
import {Dish, DishResponse} from "../../../models/dish";

@Component({
  selector: 'app-dish-brief',
  templateUrl: './dish-brief.component.html',
  styleUrls: ['./dish-brief.component.css']
})
export class DishBriefComponent {
  @Input() dish!: DishResponse
}
