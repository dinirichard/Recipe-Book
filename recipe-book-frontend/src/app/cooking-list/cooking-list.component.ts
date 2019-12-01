import { Component, OnInit } from '@angular/core';
import { ApiRecipeService } from '../shared/api-recipe.service';
import { ToCook } from '../shared/models/tocook';

@Component({
  selector: 'app-cooking-list',
  templateUrl: './cooking-list.component.html',
  styleUrls: ['./cooking-list.component.sass']
})
export class CookingListComponent implements OnInit {

  cookingList: ToCook[] = [];
  constructor(apiService: ApiRecipeService) { }

  ngOnInit() {
  }

}
