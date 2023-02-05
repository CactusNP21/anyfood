import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  DoCheck, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FilterDialogComponent} from "../filter-dialog/filter-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements AfterViewInit{
  @ViewChild('sb') searchBar: ElementRef
  @Output() search = new EventEmitter<string>()


  constructor(private dialog: MatDialog,
              private dcs: DishControllerService,
              private cdr: ChangeDetectorRef) {
  }
  height: number
  hidden = false
  ngAfterViewInit() {
    this.height = this.searchBar.nativeElement.offsetHeight
  }

  request(val: string) {
    this.search.emit(val)
  }
  open() {
    this.dialog.open(FilterDialogComponent).afterClosed().subscribe(value => {
      if (value) {
          this.dcs.config = value
      }
    })
  }
}
