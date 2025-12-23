import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login-service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private router = inject(Router);
  private servico = inject(LoginService);
  cancelar(): void {
    this.router.navigate(['']);
  }

  salvar(usuario: string, nome: string, senha1: string, senha2: string): void {
    if (usuario == '' || nome == '' || senha1 == '' || senha2 == '') {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }
    if (senha1 != senha2) {
      alert('As senhas não coincidem!');
      return;
    }
    //fixo cadastrando apenas administradores
    this.servico.addUser({ id: usuario, grupo: 1, name: nome, password: senha1, setorId: 0 });
    this.router.navigate(['']);
  }
}
