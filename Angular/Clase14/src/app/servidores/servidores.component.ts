import { Component, OnInit } from '@angular/core';



@Component({
	selector: 'app-servidores',
	templateUrl: './servidores.component.html',
	styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent implements OnInit {
	servidores: servidor[] = []

	constructor() { }

	cambiarEstado(servidor: servidor) {
		servidor.estado = servidor.estado == 1 ? 0 : 1
	}

	ngOnInit() {
		this.servidores.push({id:1, proveedor: "Amazon", descripcion: "Firewall", estado: 0})
		this.servidores.push({id:1, proveedor: "Rackspace", descripcion: "Web", estado: 1})
		this.servidores.push({id:1, proveedor: "Azure", descripcion: "Base de datos", estado: 1})
		this.servidores.push({id:1, proveedor: "Digital Ocean", descripcion: "Balanceador de carga", estado: 0})
		this.servidores.push({id:1, proveedor: "Linode", descripcion: "Correo", estado: 1})
	}

}

interface servidor {
	id: number,
	proveedor: string,
	descripcion: string,
	estado: number
}
