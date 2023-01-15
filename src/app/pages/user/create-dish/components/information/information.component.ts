import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {SPACE} from "@angular/cdk/keycodes";
import {NewDishStateService} from "../../service/new-dish-state.service";
import {DishInfo} from "../../../../../models/dish";
import {MatDialog} from "@angular/material/dialog";
import {PreviewDialogComponent} from "../preview-dialog/preview-dialog.component";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  completed = false
  constructor(private fb: FormBuilder,
              private dish: NewDishStateService,
              private dialog: MatDialog) {
    this.dish.completed.subscribe(value => {
      this.completed = value
    })
  }
  topics: string[] = []
  info = this.fb.group({
    title: ['Крабовий салат ще 3', Validators.required],
    des: ['Набір кукурудзи консервованої, крабових палочок, огірків, майонезу', Validators.required],
    servings: [3, Validators.required],
    duration: [30, Validators.required],
    img: ['https://images.unian.net/photos/2019_12/thumb_files/1000_545_1577192910-5752.jpg'],
    topics: [this.topics]
  })
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.topics.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  remove(s: string): void {
    const index = this.topics.indexOf(s);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }
  log() {
    this.info.controls.topics.setValue([
      'кукурудза', "крабові", "майонезний"
    ])

    this.dish.setMainInfo(<DishInfo>this.info.value)
    this.dialog.open(PreviewDialogComponent, {
      minWidth: '95vw'
    })
  }
  readonly separatorKeysCodes = [SPACE] as const;
}
