import { Component,inject  } from '@angular/core';
import {LoginService} from '../../services/login-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 private servico = inject(LoginService);
 private rota = inject(Router);
 Login(username: string, password: string) {
    const user = this.servico.Login(username, password);
    console.log('Login user:', user);
    if (user!=null) {
          this.rota.navigate(['home']);
    } else {
      console.log("Usuário ou senha inválidos");
      alert("Usuário ou senha inválidos");
    }
 }
}