import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiSilpoService} from "../../service/api-silpo.service";
import {debounce} from "lodash-es";

export interface TestForm {
  i: FormArray<
    FormControl<{name: string | null; unit: string | null; price: string | null; quantity: string | null;}>
  >

  b: FormArray<FormControl<string | null>>
}


@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.css']
})
export class CreateDishComponent {
  constructor(private fb: FormBuilder, private silpo: ApiSilpoService) {
    this.search = debounce(this.search, 1000)
  }


  ingredients = this.fb.group({
    name: ['', Validators.required],
    unit: ['', Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required]
  })

  dish = this.fb.group<TestForm>(<TestForm>{
    i: this.fb.array([this.fb.control(this.ingredients)]),
    b: this.fb.array([
      this.fb.control('')
    ])
  })

  search(s: string) {
    this.silpo.searchItems(s)
  }


  log() {
    console.log(this.dish.value)
  }
}
