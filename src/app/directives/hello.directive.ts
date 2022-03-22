import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.fontStyle = 'italic'
    
   }

}
