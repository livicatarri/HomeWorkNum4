import { Directive,ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appTextModificator]',
})
export class TextModificatorDirective {
  @Input() BackColor = 'yellow'
  @Input() TextMouseEnter = "IN ewkfmrew"

  innerText: string=''
  constructor(private el: ElementRef) {
  
  }


  @HostListener("mouseenter") onMouseEnter() {
    this.innerText = this.el.nativeElement.innerHTML
    this.textModificator(this.BackColor, this.TextMouseEnter)
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.textModificator('white', '')
  }

  private textModificator(BackColor: string, TextMouseEnter: string) {
    this.el.nativeElement.style.backgroundColor = BackColor
    this.el.nativeElement.innerHTML =  this.innerText + ' ' + TextMouseEnter
  }
}
