import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHello]',
  host:{
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'}
})
export class HelloDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.fontStyle = 'italic'
    
   }

}
