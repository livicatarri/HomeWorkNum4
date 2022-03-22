import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextModificatorHost]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'}
})
export class TextModificatorHostDirective {
 
    @Input() BackColorHost = 'yellow';
    @Input() MyTextHost = "IN ewkfmrew";
  
    innerText: string= '';
    constructor(private el: ElementRef) {
    
    }
  
   onMouseEnter() {
      this.innerText = this.el.nativeElement.innerHTML;
      this.textModificator(this.BackColorHost, this.MyTextHost);
    }
  
   onMouseLeave() {
      this.textModificator('#fff', '');
    }
  
    private textModificator(BackColorHost: string, MyTextHost: string) {
      this.el.nativeElement.style.backgroundColor = BackColorHost;
      this.el.nativeElement.innerHTML =  this.innerText + ' ' + MyTextHost;
    }
  }
  

