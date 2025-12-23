import { Component, inject } from '@angular/core';
import { User } from '../../../../../core/models/user.model';
import { LoginService } from '../../../../../core/services/login-service';
import { FormBuilder, Validators,FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-usuario-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './usuario-form.html',
  styleUrl: './usuario-form.css',
})
export class UsuarioForm {
  private loginService = inject(LoginService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  idEditado: string = this.loginService.getIdEditado();

  getUsuario(): User | null {
    return this.loginService.getUserById(this.idEditado);
  }

  usuario: User | null = this.getUsuario();

  usuarioForm = this.formBuilder.group({
    username: [this.usuario?.id, Validators.required],
    name: [this.usuario?.name, Validators.required],
    password: [this.usuario?.password, Validators.required],
    grupo: [this.usuario?.grupo, Validators.required],
    setor: [this.usuario?.setorId, Validators.required],
  });

  onEditar() {
    if (this.usuarioForm.valid) {
      const updatedUser: User = {
        id: this.usuarioForm.value.username!,
        name: this.usuarioForm.value.name!,
        password: this.usuarioForm.value.password!,
        grupo: this.usuarioForm.value.grupo!,
        setorId: this.usuarioForm.value.setor!,
      };
      this.loginService.editUser(updatedUser);
      this.router.navigate(['home/admin/usuarios']);
    }
  }
  cancelar() {

  }
}
