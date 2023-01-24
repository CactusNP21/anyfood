import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";
import {DishResponse} from "../../../../models/dish";
import {ActivatedRoute} from "@angular/router";
import {DishesStateService} from "../../services/dishes-state.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  providers: [DishesStateService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverComponent implements OnInit{
  constructor(private dc: DishControllerService,
              private cdr: ChangeDetectorRef,
              private route: ActivatedRoute,
              private dialog: MatDialog
              ) {
  }
  ngOnInit() {
    this.dishes = this.route.snapshot.data["dishes"]
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
