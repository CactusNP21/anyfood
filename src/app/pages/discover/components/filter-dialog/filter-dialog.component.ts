import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {searchConfig} from "../../../../core/constants";
import {SearchConfig} from "../../../../models/search-config";
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit{
  separatorKeysCodes: number[] = [ENTER, SPACE];
  topics: string[] = []
  config: SearchConfig
  readonly initialConfig: SearchConfig = searchConfig
  constructor(private dcs: DishControllerService) {
  }
  ngOnInit() {
    this.config = this.dcs.config
  }

  add(event: MatChipInputEvent): void {
    const value = event.value
    if (value) {
      this.topics.push(value);
    }
    event.chipInput!.clear();
  }

  remove(topic: string): void {
    const index = this.topics.indexOf(topic);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

}
