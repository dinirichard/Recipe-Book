import { Component, EventEmitter } from '@angular/core';
import { Recipe } from './shared/models/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe Book';
  optionLoaded = 'recipes';





  onNavigation(option: string) {
    console.log("Arived");
    this.optionLoaded = option;
    console.log("Arrived2");

  }

  // afterDeletion(detail: Recipe){
    
  // }


}




