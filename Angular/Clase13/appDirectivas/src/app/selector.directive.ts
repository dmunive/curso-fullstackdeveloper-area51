import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSelector]'
})
export class SelectorDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(){
	const elemento = this.element.nativeElement

	const option = document.createElement("option")
	option.value = "150101"
	option.textContent = "Lima"

	elemento.appendChild(option)
  }



}
