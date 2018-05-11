import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService){}

  canActivate(): boolean {
    return this.auth.estaAutenticado()
  }

  canActivateChild(): boolean {
	  // return this.auth.estaAutenticado()
	  return this.canActivate()
  }
}
