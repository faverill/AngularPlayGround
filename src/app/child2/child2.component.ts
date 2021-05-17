import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  child2Data: string = "Data to app.component.ts from child2.component.ts";

  constructor() { }

  ngOnInit(): void {
  }

}
