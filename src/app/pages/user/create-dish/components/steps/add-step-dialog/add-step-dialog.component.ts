import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-step-dialog',
  templateUrl: './add-step-dialog.component.html',
  styleUrls: ['./add-step-dialog.component.css']
})
export class AddStepDialogComponent {
  constructor(private dialogRef: MatDialogRef<AddStepDialogComponent>) {
  }

  close() {
    this.dialogRef.close()
  }

}
