import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ENTER, SPACE} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {initialSearchConfig} from "../../../../core/constants";
import {SearchConfig} from "../../../../models/search-config";
import {DishControllerService} from "../../../../core/dish-controller/dish-controller.service";

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDialogComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, SPACE];
  topics: string[] = []
  config: SearchConfig
  initialConfig: SearchConfig = initialSearchConfig

  constructor(private dishControllerService: DishControllerService) {
  }

  ngOnInit() {
    this.config = this.dishControllerService.config
  }

  addTopic(event: MatChipInputEvent): void {
    const value = event.value
    if (value) {
      this.topics.push(value);
    }
    event.chipInput!.clear();
  }
  removeTopic(topic: string): void {
    const index = this.topics.indexOf(topic);
    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

}
