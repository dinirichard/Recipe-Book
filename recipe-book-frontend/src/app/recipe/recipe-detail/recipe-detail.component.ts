import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe';
import { ApiRecipeService } from 'src/app/shared/api-recipe.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipes: Recipe[] = [];
  @Input() recipeDetail: Recipe;
  @Output() deletedDetail = new EventEmitter<Recipe>();
  constructor(private apiService: ApiRecipeService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  deleteRecipe(recipe: Recipe) {
    if (confirm('Are you sure you want to delete notebook?')) {
      this.apiService.deleteRecipe(recipe.id).subscribe(
        response => {
          // let indexOfRecipe = this.recipes.indexOf(recipe);
          // this.recipes.splice(indexOfRecipe, 1);

        //   this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        //     this.router.navigate([this.location.path() ]);
        // }); 

        this.deletedDetail.emit(recipe);

        },
        error => {
          alert('An error has occured while sending feedback');
        }
      );
    }
  }



  // delete(recipe: Recipe) {

  //   this.deleteRecipe.emit(recipe);
  //   console.log("delete method in recipe-detail");
  // }


}
