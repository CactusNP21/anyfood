import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {ENTER, SPACE} from "@angular/cdk/keycodes";
import {NewDishStateService} from "../../service/new-dish-state.service";
import {MatDialog} from "@angular/material/dialog";
import {PreviewDialogComponent} from "../preview-dialog/preview-dialog.component";
import {DishInfo} from "../../../../../../models/dish";

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
    title: ['', Validators.required],
    description: ['', Validators.required],
    servings: [3, Validators.required],
    duration: [30, Validators.required],
    url: ['', Validators.required],
    topics: [this.topics]
  })

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim().toLowerCase();

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

  preview() {
    this.info.controls.topics.setValue(this.topics)
    this.info.value.title?.toLowerCase().charAt(0).toUpperCase()
    const value = this.info.value as DishInfo
    console.log(value)
    this.dish.setMainInfo(value)
    this.dialog.open(PreviewDialogComponent, {
      minWidth: '95vw'
    })
  }

  readonly separatorKeysCodes = [SPACE, ENTER] as const;
}
