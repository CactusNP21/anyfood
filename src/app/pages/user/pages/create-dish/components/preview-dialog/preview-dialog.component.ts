import {Component, OnInit} from '@angular/core';
import {NewDishStateService} from "../../service/new-dish-state.service";
import {Dish} from "../../../../../../models/dish";
import {DishControllerService} from "../../../../../../core/dish-controller/dish-controller.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.css']
})
export class PreviewDialogComponent implements OnInit{

  constructor(private dishState: NewDishStateService,
              private dishController: DishControllerService,
              private snack: MatSnackBar,
              private router: Router,
              private dialog: MatDialogRef<PreviewDialogComponent>) {
  }

  dish: Dish
  ngOnInit() {
    this.dish = this.dishState.currentDish
  }
  close() {
    this.dialog.close()
  }
  postDish() {
    this.dishController.addDish(this.dish).subscribe(value => {
      this.snack.open('Успішно відправлено на модерацію', 'Ок', {
        horizontalPosition: 'center',
        verticalPosition: "top",
        duration: 3000
      })
      this.router.navigate(['user'])
      this.dialog.close()
    })
  }

}
