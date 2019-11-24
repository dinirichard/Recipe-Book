import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetail: Recipe;
  // @Output() deleteRecipe = new EventEmitter<Recipe>();
  constructor(private apiService: ApiRecipeService) { }

  ngOnInit() {
  }

  deleteRecipe(recipe: Recipe) {
    if (confirm("Are you sure you want to delete notebook?")) {
      this.apiService.deleteRecipe(recipe.id).subscribe(
        response => {
          let indexOfRecipe = this.recipes.indexOf(recipe);
          this.recipes.splice(indexOfRecipe, 1);
        },
        error => {
          alert("An error has occured while sending feedback");
        }
      );
    }
  }



  // delete(recipe: Recipe) {

  //   this.deleteRecipe.emit(recipe);
  //   console.log("delete method in recipe-detail");
  // }


}
