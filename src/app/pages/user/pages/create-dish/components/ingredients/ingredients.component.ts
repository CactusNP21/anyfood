import {Component, OnDestroy, ViewChild} from '@angular/core';
import {ApiSilpoService, Items} from "../../service/api-silpo.service";
import {debounce} from "lodash-es";
import {MatTable} from "@angular/material/table";
import {Ingredients} from "../../../../../../models/dish";
import {NewDishStateService} from "../../service/new-dish-state.service";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent{
  @ViewChild(MatTable) table!: MatTable<any>
  ingredients: Ingredients = []
  items: Items[] = []
  searchVal = ''
  displayedColumns = ['name', 'unit']
  lastClicked = ''

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

  addIngredients(): void {
    const item = this.items.find(value => value.name === this.searchVal);
    if (!item) {
      return;
    }

    const { name, unit, price, mainImage } = item;
    const quantityMatch = unit.match(/(\d+,?\d?)/g);
    const quantity = quantityMatch ? +quantityMatch[0].replace(',', '.') : 0;
    const suffix = unit.slice(quantityMatch?.[0]?.length ?? 0);

    const priceForLowestUnit = quantity > 0 ? price / quantity : price;
    const ingredient = { name, price: priceForLowestUnit, quantity, unit: suffix, mainImg: mainImage };
    this.ingredients.push(ingredient);

    this.dishState.setIngredients(this.ingredients);
    this.table.renderRows();
    this.searchVal = '';
    this.items = [];
  }
  markClicked(row: any) {
    this.lastClicked = row.name
  }

  deleteIngredient() {
    this.ingredients = this.ingredients.filter(value => value.name !== this.lastClicked)
    this.dishState.setIngredients(this.ingredients)
  }

  updateIngredients() {
    this.dishState.setIngredients(this.ingredients)
  }
}
