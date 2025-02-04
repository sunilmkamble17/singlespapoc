import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as singleSpa from 'single-spa';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('authToken');
    if (!isAuthenticated) {
      singleSpa.navigateToUrl('#/login');
      // this.router.navigate(['#/login']); // Redirect to login if not authenticated
    }
    console.log({isAuthenticated});
    
    return isAuthenticated;
  }
}
