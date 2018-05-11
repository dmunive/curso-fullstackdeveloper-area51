import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivaNumber]'
})
export class DirectivaNumberDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("focus") foco(){
    this.elementRef.nativeElement.setAttribute("type", "number")
  }

  @HostListener("blur") perdidaFoco(){
    this.elementRef.nativeElement.setAttribute("type", "text")
  }

}
