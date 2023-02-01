import {Component, ViewChild} from '@angular/core';
import {ApiSilpoService, Items} from "../../service/api-silpo.service";
import {debounce} from "lodash-es";
import {MatTable} from "@angular/material/table";
import {Ingredients} from "../../../../../models/dish";
import {NewDishStateService} from "../../service/new-dish-state.service";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @ViewChild(MatTable) table!: MatTable<any>
  ingredients: Ingredients = []
  items: Items[] = []
  searchVal = ''
  displayedColumns = ['name', 'unit']

  constructor(private silpo: ApiSilpoService,
              private dishState: NewDishStateService) {
    this.search = debounce(this.search, 500)
  }

  search() {
    this.silpo.searchItems(this.searchVal).subscribe(value => {
      console.log(value)
      this.items = value.items
    })
  }

  addIngredients() {
    const item = this.items.find(value => value.name === this.searchVal)
    if (item) {
      const {name, unit, price, mainImage} = item
      let quantity: RegExpMatchArray | null | number = unit.match(/(\d+,?\d?)/g)
      let suffix;
      let priceForLowestUnit;
      if (quantity) {
        switch (+quantity[0] > 0) {
          case true:
            priceForLowestUnit = price / +quantity[0]
            break
          case false:
            quantity[0] = quantity[0].replace(',', '.')
            priceForLowestUnit = price * +quantity[0]
        }
        priceForLowestUnit = price / +quantity[0]
        suffix = unit.slice(quantity[0].length)
      } else {
        priceForLowestUnit = price
        suffix = unit.slice(0)
      }
      quantity = 0
      this.ingredients.push({name, price: priceForLowestUnit, quantity, unit: suffix, mainImg: mainImage})
      this.dishState.setIngredients(this.ingredients)
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
    this.dishState.setIngredients(this.ingredients)
  }
}
