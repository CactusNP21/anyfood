import {Component, Input, OnInit} from '@angular/core';
import {Dish, DishInfo, DishResponse, Ingredients, Steps} from "../../../models/dish";

@Component({
  selector: 'app-dish-detailed',
  templateUrl: './dish-detailed.component.html',
  styleUrls: ['./dish-detailed.component.css']
})
export class DishDetailedComponent {
  @Input() dish!: DishResponse



}
