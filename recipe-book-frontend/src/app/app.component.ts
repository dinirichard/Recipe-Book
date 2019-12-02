import { Component, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Recipe } from './shared/models/recipe';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Recipe Book';
  optionLoaded = 'recipes';
  snavBool: boolean;

  @ViewChild('hiddenBtn', { static: false }) hiddenBtn: ElementRef;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1023px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }




  ngOnInit() {
    console.log("snavBool");
    console.log(this.snavBool);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onNavigation(option: string) {
    console.log("Arived");
    this.optionLoaded = option;
    console.log("Arrived2");

  }

  cookNavToggle(event: boolean) {
    this.snavBool = event;
    this.hiddenBtn.nativeElement.click();
    console.log("Got IT");
    console.log(this.snavBool);
  }


}




