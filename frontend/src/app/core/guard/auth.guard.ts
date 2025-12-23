import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login-service';

export const authGuard: CanActivateFn = (route, state): boolean => {
  const authLoginService = inject(LoginService);
  const router = inject(Router);

  if (authLoginService.authenticatedUser() !== 'NotFound') {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
