import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  updateRecipeDetail(rec: Recipe) {
    console.log("Arrived1");
    this.recipe = rec;
    console.log("Arrived2");
  }

}
