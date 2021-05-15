import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'play';
  appData: string = "color:blue; font-style:italic;"
  

  constructor(private myChild: ChildComponent){

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
