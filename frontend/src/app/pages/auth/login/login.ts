import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../../core/services/login-service';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIcon, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  // private servico = inject(LoginService);
  // private rota = inject(Router);

  formLogin: FormGroup = new FormGroup({
    usuario: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  login() {
    const username = this.formLogin.get('usuario')?.value;
    const password = this.formLogin.get('senha')?.value;

    const user = this.loginService.login(username, password);
    console.log('Login user:', user);
    if (user != null) {
      // Login bem-sucedido
      this.router.navigate(['home']);
    } else {
      // Login falhou
      console.log('Usuário ou senha inválidos');
    }
  }

  // usuario = signal<string>('');
  // senha = signal<string>('');
  // loginInvalido = signal<boolean>(false);

  // senhaInvalida = computed(() => {
  //   const password = this.senha();
  //   return password.length < 4 && password !== '';
  // });

  // usuarioInvalido = computed(() => {
  //   const user = this.usuario();
  //   return user.length < 6 && user !== '';
  // });

  // onSubmitedOk = computed(() => {
  //   return !this.senhaInvalida() && !this.usuarioInvalido();
  // });

  // login(username: string, password: string) {
  //   const user = this.servico.login(username, password);
  //   console.log('Login user:', user);
  //   if (user != null) {
  //     this.loginInvalido.set(false);
  //     this.rota.navigate(['home']);
  //   } else {
  //     console.log('Usuário ou senha inválidos');
  //     this.loginInvalido.set(true);
  //   }
  // }
}
