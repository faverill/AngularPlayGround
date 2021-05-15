import { Component, Injectable, OnInit, Output } from '@angular/core';
//import * as EventEmitter from 'events';
import { EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ChildComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  counter: number = 0;

  simpleObservable = new Observable((observer) =>
      {
        //Funny thing; this counter is treated as a separate counter
        this.counter += 1;
        observer.next("Each time you subscribe to an observable, it fires. counter = " + this.counter);
        observer.complete()
      });

  myPromise = new Promise((resolve,reject) =>
    {
      console.log("In Child, myPromise is created once. Counter does not change.");
      this.counter += 1;
      resolve("Message from myPromise. counter = " + this.counter);
    });
  

  constructor() { }

  ngOnInit(): void {
  }

  getMyInfo() {
    //Funny thing; this counter is treated as a separate counter
    this.counter += 1;
    console.log("Each time you emit, the child emitter fires.");
    this.notifyParent.emit('In child.component, counter = ' + this.counter);
  }

  
}
