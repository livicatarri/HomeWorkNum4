import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRainbowText]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'}
})
export class RainbowTextDirective {
  constructor(private el: ElementRef) {
    
  }

  onMouseEnter() {
    this.el.nativeElement.classList.add('rainbow');
  }

  onMouseLeave() {
    this.el.nativeElement.classList.remove('rainbow')
  }

  }



