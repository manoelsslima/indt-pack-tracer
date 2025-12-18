import { booleanAttribute, Component, inject } from '@angular/core';
import { LoginService } from '../../../core/services/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
private servico=inject(LoginService)
private router=inject(Router);
logOut(){
  this.servico.logout();
  this.router.navigate(['/login']);
}
isAuthenticated(){
  var result:boolean;
  result=this.servico.isAuthenticated();
  console.log('isAuthenticated:', result);
  return result;
}
}