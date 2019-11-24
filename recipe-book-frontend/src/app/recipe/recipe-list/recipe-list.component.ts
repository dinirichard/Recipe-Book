import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { ApiRecipeService } from 'src/app/shared/api-recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeUpdate = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  // recipes: Recipe[] = [
  //   new Recipe("Steak", "Using this recipe you can prepare a very tasty and pleasantly looking steak",
  //     "https://moodysbutchershop.com/wp-content/uploads/2017/09/Ribeye-on-Platter.jpg"),
  //   new Recipe("White soup", "Akwa-Ibom native soup for eating along side pounded yam", "https://sisijemimah.com/wp-content/uploads/2015/09/ofe-nsala.jpg")
  // ];

  constructor(private apiService: ApiRecipeService) { }

  ngOnInit() {
    this.getAllRecipe();
  }

  public getAllRecipe() {
    this.apiService.getAllRecipes().subscribe(
      response => {
        this.recipes = response;
      },
      error => {
        alert("An error has occured while sending feedback");
      }
    );
  }

  onRecipeSelect(recipe: Recipe) {

    this.recipeUpdate.emit(recipe);
  }



}
