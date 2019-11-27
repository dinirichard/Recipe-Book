import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { OnChanges, SimpleChanges  } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { ApiRecipeService } from 'src/app/shared/api-recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnChanges {

  @Output() recipeUpdate = new EventEmitter<Recipe>();
  @Input() deletedDetail: Recipe;
  recipes: Recipe[] = [];

  constructor(private apiService: ApiRecipeService) { }

  ngOnInit() {
    this.getAllRecipe();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (typeof changes['deletedDetail'] !== "undefined") {
 
      // retrieve the quiz variable change info
      var change = changes['deletedDetail'];

      // only perform the task if the value has been changed
      if (!change.isFirstChange()) {
          // execute the Http request and retrieve the result
          const indexOfRecipe = this.recipes.indexOf(this.deletedDetail);
          this.recipes.splice(indexOfRecipe, 1);
          this.onRecipeSelect(undefined);
      }

    }
  }


  public getAllRecipe() {
    this.apiService.getAllRecipes().subscribe(
      response => {
        this.recipes = response;
      },
      error => {
        alert('An error has occured while sending feedback');
      }
    );
  }

  onRecipeSelect(recipe: Recipe) {

    this.recipeUpdate.emit(recipe);
  }



}
