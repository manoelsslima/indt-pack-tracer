import { Routes } from '@angular/router';
import { Login } from './core/components/login/login';
import { Home } from './pages/home/home';
import { Register } from './core/components/register/register/register';
import { Admin } from './pages/home/admin/admin/admin';
import { Supervisor } from './pages/home/supervisor/supervisor/supervisor';
import { Operador } from './pages/home/operador/operador/operador';
import { loginGuard } from './guard/login.guard';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', component: Login,
    canActivate:[loginGuard]
   },
  { path: 'home', component: Home, 
    canActivate:[authGuard],
    children: [        
      {path:'admin', component: Admin},
      {path:'supervisor', component: Supervisor},
      {path:'operador', component: Operador},
    ]
  },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '' }
];
