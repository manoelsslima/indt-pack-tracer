import { Component, inject } from '@angular/core';
import { LoginService } from '../../../core/services/login-service';
import { User } from '../../../core/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  private servico = inject(LoginService);
  private router = inject(Router);

  getUsers(): User[] {
    return this.servico.getUsers();
  }

  deleteUser(usuarioId: string) {
    this.servico.deleteUser(usuarioId);
  }

  editUser(id:string) {
    this.servico.editId(id);
    this.router.navigate(['home/admin/usuarios-form']);
  }
}
