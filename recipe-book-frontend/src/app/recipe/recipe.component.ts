import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe';
import { ApiRecipeService } from '../shared/api-recipe.service';
import { Ingredient } from '../shared/models/ingredient';
import { bulmaQuickview } from '../../../node_modules/bulma-extensions/bulma-quickview/dist/js/bulma-quickview.min.js';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;
  constructor(private apiService: ApiRecipeService) { }
  detailDeleted: Recipe;
  recipeIngredients: Ingredient[] = []

  isDisabled = false;

  // var quickviews = bulmaQuickview.attach(); // quickviews now contains an array of all Quickview instances

  ngOnInit() {
  }

  updateRecipeDetail(rec: Recipe) {
    this.recipe = rec;
  }

  getRecipeIngredients(recipeId: number): void {
    this.apiService.getIngredientsByRecipe(recipeId).subscribe(response => {
      this.recipeIngredients = response;
    },
      error => {
        alert('An error has occured while getting Ingrdients');
      })
  }

  showIngredients(show: boolean) {
    if (show) {
      this.getRecipeIngredients(this.recipe.id);
      this.isDisabled = true;

    } else {
      this.isDisabled = false;
    }
  }





}
