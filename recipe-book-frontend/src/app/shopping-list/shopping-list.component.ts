import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Sirlon Cut Beef", 200),
    new Ingredient("Onion", 10)
  ];


  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(ingre: Ingredient) {
    this.ingredients.push(ingre);
  }

}
