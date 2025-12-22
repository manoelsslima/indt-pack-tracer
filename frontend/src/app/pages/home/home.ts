import { booleanAttribute, Component, inject } from '@angular/core';
import { LoginService } from '../../core/services/login-service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Admin } from './admin/admin/admin';
import { Operador } from './operador/operador/operador';
import { Supervisor } from './supervisor/supervisor/supervisor';
import { nomeSistema, versaoSistema } from '../../shared/models/config/config';
import { SetorService } from '../../core/services/setor-service';

@Component({
  selector: 'app-home',
  imports: [Admin, Supervisor, Operador],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private servico = inject(LoginService);
  private servicoSetor = inject(SetorService);
  private router = inject(Router);
  
  logOut() {
    this.servico.logout();
    this.router.navigate(['/login']);
  }
  
  itens() {
    this.router.navigate(['home/supervisor/itens']);
  }
  
  historico() {
    this.router.navigate(['home/supervisor/historico']);
  }
  
  setores() {
    this.router.navigate(['home/admin/setores']);
  }
  
  usuarios() {
    this.router.navigate(['home/admin/usuarios']);
  }
  
  dashboard() {
    this.router.navigate(['home/admin/dashboard']);
  }



  isAuthenticated() {
    var result: boolean;
    result = this.servico.authenticatedUser() !== 'NotFound';
    console.log('authenticatedUser:', this.servico.authenticatedUser());
    return result;
  }

  authenticatedUser(): User | null {
    let result: User;
    if (this.servico.authenticatedUser() !== 'NotFound') {
      result = JSON.parse(this.servico.authenticatedUser());
      return result;
    }
    return null;
  }
  systemName(): string {
    return `${nomeSistema} - Versão ${versaoSistema}`;
  }
  getSetorNameById(): string {
    if (this.authenticatedUser() !== null) {
      let setorId: number = this.authenticatedUser()!.setorId;
      return this.servicoSetor.getSetorNameById(setorId);
    }
    return 'Desconhecido';
  }

  getNomeGrupo(): string {
    if (this.authenticatedUser() !== null) {
      let grupo: number = this.authenticatedUser()!.grupo;
      if (grupo === 1) {
        return 'Administrador';
      } else if (grupo === 2) {
        return 'Supervisor';
      } else if (grupo === 3) {
        return 'Operador';
      }
      return 'Desconhecido';
    } else return 'Desconhecido';
  }

  getGrupo(): number {
    if (this.authenticatedUser() !== null) {
      let grupo: number = this.authenticatedUser()!.grupo;
      return grupo;
    }
    return 0
  }
}
