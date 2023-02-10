import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";
import {DishResponse} from "../../../../models/dish";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  constructor(
    private dishController: DishControllerService,
    private route: ActivatedRoute) {
  }
  dish: DishResponse
  ngOnInit() {
   this.dish = this.route.snapshot.data['dish']
  }
}
