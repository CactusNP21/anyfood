import {Component, EventEmitter, Output} from '@angular/core';
import {FilterDialogComponent} from "../filter-dialog/filter-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>()

  constructor(private dialog: MatDialog) {
  }
  request(val: string) {
    this.search.emit(val)
  }
  open() {
    this.dialog.open(FilterDialogComponent).afterClosed().subscribe(value => {
      if (value) {

      }
    })
  }
}
