import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddStepDialogComponent} from "./add-step-dialog/add-step-dialog.component";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {NewDishStateService} from "../../service/new-dish-state.service";
import {Steps} from "../../../../../models/dish";


@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepsComponent {

  steps: Steps = []

  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef,
              private dishState: NewDishStateService) {
  }
  drop(event: CdkDragDrop<Steps>) {
    console.log(event)
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);
    console.log(this.steps)
  }
  addStep() {
    const dialog: MatDialogRef<AddStepDialogComponent, { title: string, description: string } | undefined> = this.dialog.open(AddStepDialogComponent)
    dialog.afterClosed().subscribe(
      value => {
        if (value) {
          this.steps.push(value)
          this.dishState.setSteps(this.steps)
          this.cdr.markForCheck()
        }
      }
    )
  }
  delete(des: string) {
    this.steps = this.steps.filter(value => value.description !== des)
    this.cdr.markForCheck()
  }

}
