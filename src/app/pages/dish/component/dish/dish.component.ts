import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter} from "rxjs";
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

  id = ''
  dish: DishResponse
  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params['number'])
    ).subscribe(value => {
      this.id = value['number']
    })
    this.dishController.getDish(this.id).subscribe(value => {
      this.dish = value
    })
  }
}
