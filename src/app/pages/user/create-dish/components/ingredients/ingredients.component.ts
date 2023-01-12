import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ApiSilpoService} from "../../service/api-silpo.service";
import {debounce} from "lodash-es";
import {TestForm} from "../create-dish/create-dish.component";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent{
  @Input() form!: FormGroup<TestForm>
  items$ = this.silpo.getItems()
  constructor(private fb: FormBuilder, private silpo: ApiSilpoService) {
    this.search = debounce(this.search, 1000)

  }


  get ingredients() {
    return this.form.get('i') as FormArray
  }

  search(s : string) {
    this.silpo.searchItems(s)
  }

  addIng () {
    this.form.controls.i.push(this.fb.control(''))
  }

}
