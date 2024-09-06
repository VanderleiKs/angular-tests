import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appBgColor]',
  standalone: true
})
export class BgColorDirective {
 
  constructor(private elRef: ElementRef, private rend2: Renderer2) { }
 
  setColors(bgCol: string, txtCol: string) {
    this.rend2.setStyle(this.elRef.nativeElement, 'backgroundColor', bgCol);
    this.rend2.setStyle(this.elRef.nativeElement, 'color', txtCol);
  }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.setColors('red', 'orange');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.setColors('blue', 'pink');
  }
}