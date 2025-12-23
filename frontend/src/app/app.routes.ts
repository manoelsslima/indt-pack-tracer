import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { Historico } from './pages/historico/historico';
import { Usuarios } from './pages/usuarios/usuarios/usuarios';
import { Setores } from './pages/setores/setores/setores';
import { UsuarioForm } from './pages/usuarios/usuarios/form/usuario-form/usuario-form';
import { SetorForm } from './pages/setores/form/setor-form/setor-form';
import { Login } from './pages/auth/login/login';
import { loginGuard } from './core/guard/login.guard';
import { authGuard } from './core/guard/auth.guard';
import { Register } from './pages/auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Supervisor } from './pages/supervisor/supervisor';
import { Itens } from './pages/itens/itens';
import { Operador } from './pages/operador/operador';

export const routes: Routes = [
  { path: '', component: Login, canActivate: [loginGuard] },
  {
    path: 'home',
    component: Home,
    canActivate: [authGuard],
    children: [
      {
        path: 'admin',
        component: Admin,
        children: [
          { path: 'usuarios', component: Usuarios },
          { path: 'usuarios-form', component: UsuarioForm },
          { path: 'setores', component: Setores },
          { path: 'setor-form', component: SetorForm },
          { path: 'dashboard', component: Dashboard },
        ],
      },
      {
        path: 'supervisor',
        component: Supervisor,
        children: [
          { path: 'itens', component: Itens },
          { path: 'historico', component: Historico },
        ],
      },
      { path: 'operador', component: Operador },
      { path: 'dashboard', component: Dashboard },
      { path: 'historico', component: Historico },
    ],
  },
  //{ path: 'usuarios', component: Usuarios },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '' },
];
