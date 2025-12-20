import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../core/services/login-service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state):boolean => {
  const authLoginService = inject(LoginService);
  const router = inject(Router);
  console.log('authGuard:', authLoginService.authenticatedUser());
  if (authLoginService.authenticatedUser() !== 'NotFound') {
    return true;
  } else{
  router.navigate(['']);
  return false;  
  }  
};
