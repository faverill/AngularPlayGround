import { Directive, ElementRef, Injectable } from '@angular/core';

@Directive({
  selector: '[appBlueBackground]'
})
@Injectable({
  providedIn: 'root'
})
export class BlueBackgroundDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.backgroundColor = "blue";
  }

}
