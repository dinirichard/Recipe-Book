import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe';
import { Ingredient } from './models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ApiRecipeService {
  private BASE_URL = "http://localhost:8085/api";
  public ALL_RECIPES_URL = `${this.BASE_URL}\\recipe\\all`;
  private SAVE_UPDATE_RECIPE = `${this.BASE_URL}\\recipe`;
  private DELETE_RECIPE_URL = `${this.BASE_URL}\\recipe\\`;
  private ALL_INGREDIENTS_URL = `${this.BASE_URL}\\ingredients\\all`;
  private SAVE_UPDATE_INGREDIENT_URL = `${this.BASE_URL}\\ingredients`;
  private INGREDIENTS_BY_RECIPE_URL = `${this.BASE_URL}\\ingredients\\byRecipe\\`;
  private DELETE_INGREDIENT_URL = `${this.BASE_URL}\\ingredients\\`;

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.ALL_RECIPES_URL);
  }

  postRecipe(notebook: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.SAVE_UPDATE_RECIPE, notebook);
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(this.DELETE_RECIPE_URL + id);
  }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ALL_INGREDIENTS_URL);
  }

  getIngredientsByRecipe(notebookId: number): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.INGREDIENTS_BY_RECIPE_URL + notebookId);
  }

  saveIngredient(note: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.SAVE_UPDATE_INGREDIENT_URL, note);
  }

  deleteIngredient(id: number): Observable<any> {
    return this.http.delete(this.DELETE_INGREDIENT_URL + id);
  }

}
