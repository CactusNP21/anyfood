import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {ApiSilpoService} from "../../service/api-silpo.service";
import {map} from "rxjs";
import {debounce} from "lodash-es";

export interface TestForm {
  i: FormArray<FormControl<string | null>>
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
  items$ = this.silpo.getItems()

  dish = this.fb.group<TestForm>({
    i: this.fb.array([
      this.fb.control('')
    ]),
    b: this.fb.array([
      this.fb.control('')
    ])
  })
  search(s : string) {
    this.silpo.searchItems(s)
  }


  log() {
    console.log(this.dish.value)
  }
}
