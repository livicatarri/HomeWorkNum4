import { Directive, ElementRef,  Input } from '@angular/core';

@Directive({
  selector: '[appTextModificatorHost]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'}
})
export class TextModificatorHostDirective {
 
    @Input() BackColorHost = 'yellow';
    @Input() TextEnterHost = "IN ewkfmrew";
  
    innerText: string= '';
    constructor(private el: ElementRef) {
    
    }
  
   onMouseEnter() {
      this.innerText = this.el.nativeElement.innerHTML;
      this.textModificator(this.BackColorHost, this.TextEnterHost);
    }
   onMouseLeave() {
      this.textModificator('white', '');
    }
    private textModificator(BackColorHost: string, TextEnterHost: string) {
      this.el.nativeElement.style.backgroundColor = BackColorHost;
      this.el.nativeElement.innerHTML =  this.innerText + ' ' + TextEnterHost;
    }
  }
  

