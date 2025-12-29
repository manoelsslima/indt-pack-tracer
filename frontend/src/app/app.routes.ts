import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Layout } from './layout/layout';
import { Admin } from './pages/admin/admin';
import { Usuarios } from './pages/usuarios/usuarios/usuarios';
import { UsuarioForm } from './pages/usuarios/usuarios/form/usuario-form/usuario-form';
import { SetorForm } from './pages/setores/form/setor-form/setor-form';
import { Dashboard } from './pages/dashboard/dashboard';
import { Itens } from './pages/itens/itens';
import { Historico } from './pages/historico/historico';
import { Operador } from './pages/cadastros/operador/operador';
import { Supervisor } from './pages/cadastros/supervisor/supervisor';
import { Administrador } from './pages/cadastros/administrador/administrador';
import { Login } from './pages/auth/login/login';
import { SetorComponent } from './pages/cadastros/setor/setor';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: Home},
      {
        path: 'cadastros',
        pathMatch: 'prefix',
        children: [
          { path: 'operador', component: Operador },
          { path: 'supervisor', component: Supervisor },
          { path: 'setor', component: SetorComponent },
          { path: 'administrador', component: Administrador },

          { path: 'usuarios', component: Usuarios },
          { path: 'usuarios-form', component: UsuarioForm },
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
    ]
  },
  { path: 'login', component: Login },
  { path: '**', redirectTo: 'login' },
  // { path: '', component: Login, canActivate: [loginGuard] },
  // {
  //   path: 'home',
  //   component: Home,
  //   canActivate: [authGuard],
  //   children: [
  //     {
  //       path: 'admin',
  //       component: Admin,
  //       children: [
  //         { path: 'usuarios', component: Usuarios },
  //         { path: 'usuarios-form', component: UsuarioForm },
  //         { path: 'setores', component: Setores },
  //         { path: 'setor-form', component: SetorForm },
  //         { path: 'dashboard', component: Dashboard },
  //       ],
  //     },
  //     {
  //       path: 'supervisor',
  //       component: Supervisor,
  //       children: [
  //         { path: 'itens', component: Itens },
  //         { path: 'historico', component: Historico },
  //       ],
  //     },
  //     { path: 'operador', component: Operador },
  //     { path: 'dashboard', component: Dashboard },
  //     { path: 'historico', component: Historico },
  //   ],
  // },
  // //{ path: 'usuarios', component: Usuarios },
  // { path: 'register', component: Register },
  // { path: '**', redirectTo: '' },
];
