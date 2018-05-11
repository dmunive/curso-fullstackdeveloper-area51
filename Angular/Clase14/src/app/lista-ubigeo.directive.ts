import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appListaUbigeo]'
})
export class ListaUbigeoDirective implements OnInit {
	ngOnInit(): void {
		this.lista.forEach( item => {
			const etiquetaOption = document.createElement("option")
			etiquetaOption.textContent = item

			this.elementRef.nativeElement.appendChild(etiquetaOption)
		})
	}

	@Input() lista: Array<string>

	constructor(private elementRef: ElementRef) { }


}
