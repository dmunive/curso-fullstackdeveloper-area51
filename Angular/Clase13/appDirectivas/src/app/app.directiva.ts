import { Directive, ElementRef, OnInit, Input, HostListener } from "@angular/core";

@Directive({
	selector: "[appColor]"
})
export class AppDirective implements OnInit {
	@Input() colorPorDefecto: string
	@Input() hover: string
	
	constructor(private element: ElementRef){}

	ngOnInit(){
		this.element.nativeElement.style.backgroundColor = this.colorPorDefecto
		this.element.nativeElement.style.color = "white"
		this.element.nativeElement.style.fontFamily = "Arial"
	}

	@HostListener("mouseenter") mouseentrando() {
		this.element.nativeElement.style.backgroundColor = this.hover
	}

	@HostListener("mouseout") mousesaliendo() {
		this.element.nativeElement.style.backgroundColor = this.colorPorDefecto
	}
}