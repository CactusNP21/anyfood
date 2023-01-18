import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AdminControllerService} from "../../services/admin-controller.service";
import {Dish, DishResponse} from "../../../../models/dish";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit{
  constructor(private controller: AdminControllerService,
              private cdr: ChangeDetectorRef) {
  }
  unapprovedDishes: DishResponse[] = []
  ngOnInit() {

  }
  log() {
    this.controller.getUnapprovedDishes().subscribe(value => {
      this.unapprovedDishes = value
      this.cdr.markForCheck()
    })
  }
  approve(id: string) {
    this.controller.approveDish(id).subscribe(value => {
      console.log(value)
    })
  }
  disapprove(id: string) {
    console.log(id)
  }
}
