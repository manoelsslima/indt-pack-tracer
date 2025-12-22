import { Routes } from '@angular/router';
import { Login } from './core/components/login/login';
import { Home } from './pages/home/home';
import { Register } from './core/components/register/register/register';
import { Admin } from './pages/home/admin/admin/admin';
import { Supervisor } from './pages/home/supervisor/supervisor/supervisor';
import { Operador } from './pages/home/operador/operador/operador';
import { loginGuard } from './guard/login.guard';
import { authGuard } from './guard/auth.guard';
import { Dashboard } from './pages/home/dashboard/dashboard/dashboard';
import { Historico } from './pages/home/historico/historico/historico';
import { Usuarios } from './pages/usuarios/usuarios/usuarios';
import { Setores } from './pages/setores/setores/setores';
import { Itens } from './pages/itens/itens/itens';
import { form } from '@angular/forms/signals';
import { UsuarioForm } from './pages/usuarios/usuarios/form/usuario-form/usuario-form';

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
