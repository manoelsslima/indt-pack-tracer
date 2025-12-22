import { Component,computed,inject, signal  } from '@angular/core';
import {LoginService} from '../../services/login-service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 private servico = inject(LoginService);
 private rota = inject(Router);

 usuario= signal<string>('');
 senha= signal<string>('');
 loginInvalido = signal<boolean>(false);

 senhaInvalida=computed(()=> {
    const password= this.senha();
    return password.length < 4 && password!=='';
 });
 
 usuarioInvalido=computed(()=> {
    const user= this.usuario();
    return user.length < 6 && user!=='';
 });

 onSubmitedOk=computed(()=> {
    return !this.senhaInvalida() && !this.usuarioInvalido();
 });


 Login(username: string, password: string) {
    const user = this.servico.Login(username, password);
    console.log('Login user:', user);
    if (user!=null) {
          this.loginInvalido.set(false);
          this.rota.navigate(['home']);
    } else {
      console.log("Usuário ou senha inválidos");
      this.loginInvalido.set(true);
    }
 }
}