import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectivaInput]'
})
export class DirectivaInputDirective {
	@Input() colorPorDefecto: string = "yellow"
	@Input() colorAlternativo: string = "red"

	constructor(private elementRef: ElementRef) { }
	
		ngOnInit() {
			const elemento = this.elementRef.nativeElement
			elemento.style.backgroundColor = this.colorPorDefecto
			elemento.style.fontFamily = "Arial"
			elemento.style.fontSize = "40px"
			elemento.style.padding = "20px"
			elemento.style.lineHeight = "57px"
			elemento.style.textAlign = "center"
		}
	
		@HostListener("mouseenter") cambiarARojo() {
			console.log("Entro")
			const elemento = this.elementRef.nativeElement
			elemento.style.backgroundColor = this.colorAlternativo
		}
	
		@HostListener("mouseleave") cambiarAAmarillo() {
			const elemento = this.elementRef.nativeElement
			elemento.style.backgroundColor = this.colorPorDefecto
		}

}
