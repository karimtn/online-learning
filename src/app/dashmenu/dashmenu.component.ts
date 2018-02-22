import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dashmenu',
  templateUrl: './dashmenu.component.html',
  styleUrls: ['./dashmenu.component.css']
})
export class DashmenuComponent implements OnInit {
  // tslint:disable-next-line:member-ordering
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line:member-ordering
  Nav0 = Array(1).fill(0).map(() => `Home`);
  Nav1 = Array(1).fill(0).map(() => `Dashbord`);
  Nav2 = Array(1).fill(0).map(() => `Courses`);
  Nav3 = Array(1).fill(0).map(() => `View Courses`);
  Nav4 = Array(1).fill(0).map(() => `Add Courses`);
  Nav5 = Array(1).fill(0).map(() => `Comments`);
  Nav6 = Array(1).fill(0).map(() => `Users`);
  Nav7 = Array(1).fill(0).map(() => `Contact`);
  fillerContent = Array(50).fill(0).map(() => {});
  // tslint:disable-next-line:member-ordering
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

   // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }


}

