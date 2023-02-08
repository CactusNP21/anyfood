import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import {FilterDialogComponent} from "../filter-dialog/filter-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";
import {initialSearchConfig} from "../../../../core/constants";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('sb') searchBar: ElementRef
  @Output() search = new EventEmitter<string>()
  @Output() height = new EventEmitter<number>()
  constructor(private dialog: MatDialog,
              private dcs: DishControllerService) {
  }
  ngAfterViewInit() {
    this.height.emit(this.searchBar.nativeElement.offsetHeight)
  }
  request(val: string) {
    this.search.emit(val)
  }
  restore() {
    this.dcs.config = initialSearchConfig
    this.search.emit('')
  }
  open() {
    this.dialog.open(FilterDialogComponent).afterClosed().subscribe(value => {
      if (value) {
        this.dcs.config = value
      }
    })
  }
}
