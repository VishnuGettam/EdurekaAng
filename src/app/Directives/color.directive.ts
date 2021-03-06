import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elemt:ElementRef) {

   }

   @HostListener('mouseenter') onMouseEnter(){
    this.elemt.nativeElement.style.backgroundColor = "cyan";
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.elemt.nativeElement.style.backgroundColor = "";
   }

}
