import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {

	constructor(private auth: AuthService) { }

	canActivate(): boolean {
		return this.auth.obtenerRol() === "admin"
	}
}
