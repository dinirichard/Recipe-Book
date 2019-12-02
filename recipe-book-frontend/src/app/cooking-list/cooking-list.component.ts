import { Component, OnInit } from '@angular/core';
import { ApiRecipeService } from '../shared/api-recipe.service';
import { ToCook } from '../shared/models/tocook';

@Component({
  selector: 'app-cooking-list',
  templateUrl: './cooking-list.component.html',
  styleUrls: ['./cooking-list.component.scss']
})
export class CookingListComponent implements OnInit {

  cookingList: ToCook[] = [];
  indexOfCookList: number;

  constructor(private apiService: ApiRecipeService) { }

  ngOnInit() {
    this.getCookingList();
  }

  getCookingList() {
    this.apiService.getCookingList(1).subscribe(
      response => {
        this.cookingList = response;
      },
      err => {
        alert('An error has occured while sending feedback');
      }
    );

  }

  deleteToCook(id: number) {
    this.apiService.deleteCookList(id).subscribe(
      response => {

        this.cookingList.forEach(element => {
          if (element.id = id) {
            this.indexOfCookList = this.cookingList.indexOf(element);
          }
        });
        this.cookingList.splice(this.indexOfCookList, 1);
      }
    )
  }

}
