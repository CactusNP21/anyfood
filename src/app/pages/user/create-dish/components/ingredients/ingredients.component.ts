import {Component, ViewChild} from '@angular/core';
import {ApiSilpoService, Items} from "../../service/api-silpo.service";
import {debounce} from "lodash-es";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent{
  @ViewChild(MatTable) table!: MatTable<any>
  ingredients: (Items & {suffix: string})[] = []
  items: Items[] = []
  searchVal = ''
  displayedColumns = ['name', 'unit']

  constructor( private silpo: ApiSilpoService) {
    this.search = debounce(this.search, 500)
  }

  search() {
    this.silpo.searchItems(this.searchVal).subscribe(value =>  {
      console.log(value)
      this.items = value.items
    })
  }
  addIngredients() {
    const item = this.items.find(value => value.name === this.searchVal)
    if (item) {
      const {name, unit, price, mainImage} = item
      const quantity = unit.match(/(\d+)/g)
      let suffix;
      if (quantity) {
         suffix = unit.slice(quantity[0].length)
      } else {
        suffix = unit.slice(0)
      }

      this.ingredients.push({name, mainImage, price, unit, suffix})
      this.table.renderRows()
      this.searchVal = ''
      this.items = []
    }
    console.log(this.ingredients)
  }
  lastClicked = ''
  markClicked(row: any) {
    this.lastClicked = row.name
  }
  deleteIngredients() {
    this.ingredients = this.ingredients.filter(value => value.name !== this.lastClicked)
  }
  log() {
    console.log('works')
  }
}
