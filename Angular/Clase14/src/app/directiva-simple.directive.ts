import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
	selector: '[appDirectivaSimple]'
})
export class DirectivaSimpleDirective implements OnInit {
	
	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
		const elemento = this.elementRef.nativeElement
		elemento.style.backgroundColor = "yellow"
		elemento.style.fontFamily = "Arial"
		elemento.style.fontSize = "40px"
		elemento.style.padding = "20px"
		elemento.style.lineHeight = "57px"
		elemento.style.textAlign = "center"
	}

	@HostListener("mouseenter") cambiarARojo() {
		console.log("Entro")
		const elemento = this.elementRef.nativeElement
		elemento.style.backgroundColor = "red"
	}

	@HostListener("mouseleave") cambiarAAmarillo() {
		const elemento = this.elementRef.nativeElement
		elemento.style.backgroundColor = "yellow"
	}
}
