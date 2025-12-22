import { CanActivateFn, Router } from "@angular/router";
import { LoginService } from "../core/services/login-service";
import { inject } from "@angular/core";

export const loginGuard: CanActivateFn = (route, state):boolean => {
    const authLoginService = inject(LoginService); 
    const router= inject(Router);  
    console.log('loginGuard:', authLoginService.authenticatedUser());
    
    if (authLoginService.authenticatedUser() !== 'NotFound') {
        router.navigate(['home']);
        return false;
    }else{
        return true;
    }   
    
}