import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { BlueBackgroundDirective } from './blue-background.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'play';
  dataFromChild2: string;
  @ViewChild(Child2Component,{static:false}) child2;
  appData: string = "color:blue; font-style:italic;"
  
  
  ngAfterViewInit(){
    this.dataFromChild2 = this.child2.child2Data;
  }
  
  constructor(private myChild: ChildComponent, 
    private blueBackGround: BlueBackgroundDirective){
      

  }

  getNotification($event){
    console.log($event);
  }

  lookAtChildObservable(){
    //Each time you subscribe to an observable, it fires.
    this.myChild.simpleObservable.subscribe((data) =>
      {
        console.log("In lookAtChildObservable, observable data from child:");
        console.log(data);
      })
  }

  lookAtChildPromise(){
    this.myChild.myPromise.then( (message) =>
      {
        console.log("Getting child's promise:");
        console.log(message);
      })
  }


}
