import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate {
  token: any = this.service.getToken()
  constructor(
    private service: LoginserviceService,
    private route: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.token) {
      return true;
    }
    else {
      this.route.navigate(['/login'])
      return false;
    }
  }

}
