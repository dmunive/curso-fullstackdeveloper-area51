import { Directive, ElementRef, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
	selector: '[appDirectivaFecha]'
})
export class DirectivaFechaDirective implements OnInit {
	elemento: any
	@HostBinding("style.color") color: string

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
		this.elemento = this.elementRef.nativeElement
	}

	@HostListener("focus") cambiarADate(){
		this.color = "blue"
		this.elemento.setAttribute("type", "date")
	}

	@HostListener("blur") cambiarAText() {
		this.color = "black"
		this.elemento.setAttribute("type", "text")
	}

}
