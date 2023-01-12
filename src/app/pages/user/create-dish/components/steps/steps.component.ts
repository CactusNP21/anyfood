import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {TestForm} from "../create-dish/create-dish.component";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent {
  @Input() form!: FormGroup<TestForm>

  constructor(private fb: FormBuilder) {
  }

  get steps() {
  return this.form.get('b') as FormArray
  }

  addStep() {
  this.form.controls.b.push(this.fb.control(''))
  }

}
