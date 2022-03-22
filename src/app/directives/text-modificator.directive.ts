import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextModificator]',
})
export class TextModificatorDirective {
  @Input() BackColor = 'yellow';
  @Input() MyText = "IN ewkfmrew";

  innerText: string= '';
  constructor(private el: ElementRef) {
  
  }


  @HostListener("mouseenter") onMouseEnter() {
    this.innerText = this.el.nativeElement.innerHTML;
    this.textModificator(this.BackColor, this.MyText);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.textModificator('#fff', '');
  }

  private textModificator(BackColor: string, MyText: string) {
    this.el.nativeElement.style.backgroundColor = BackColor;
    this.el.nativeElement.innerHTML =  this.innerText + ' ' + MyText;
  }
}
