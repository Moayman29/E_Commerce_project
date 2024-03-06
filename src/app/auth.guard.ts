import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  const routerServ = inject(Router);

  if (authServ.isLoggedIn.getValue() === true) {
    return true;
  } else {
    alert('Please login first');
    routerServ.navigate(['/login']);
    return false;
  }
};
